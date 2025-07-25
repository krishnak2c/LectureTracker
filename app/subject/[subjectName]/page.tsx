"use client";

import { useSearchParams } from "next/navigation";
import React, { use, useState, useEffect } from "react";
import VideoAccordion from "@/components/VideoAccordion";
import {
  SpeedCombobox,
  StudyDaysCombobox,
  StudyTimeHourCombobox,
  StudyTimeMinuteCombobox,
} from "@/components/OptionCombobox";
import { Button } from "@/components/ui/button";

  export default function Home(props: { params: Promise<{ subjectName: string }> }) {
    const searchParams = useSearchParams();
    // ✅ Unwrap params using React.use()
    const { subjectName } = use(props.params);
  
  const subject = decodeURIComponent(subjectName);
  const subjectCode = searchParams.get("subjectCode") ?? "";
  const data: Video[] = require("../../../data/" + subjectCode + ".json");
  const totalVideos = data.length;

  const [studyDaysOption, setDaysOption] = useState(5);
  const [studyTimeOption, setStudyTimeOption] = useState({
    hours: 4,
    minutes: 0,
  });
  const [studySpeedOption, setStudySpeedOption] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxStatus, setCheckboxStatus] = useState<Record<string, boolean>>(
    {}
  );
  const daysPerPage = studyDaysOption;
  const studyTimePerDay =
    3600 * studyTimeOption.hours + 60 * studyTimeOption.minutes;

  useEffect(() => {
    const savedDaysOption = localStorage.getItem("studyDaysOption");
    const savedCheckboxStatus = localStorage.getItem(
      `checkboxStatus-${subjectCode}`
    );
    const savedStudyTimeHourOption = localStorage.getItem(
      "savedStudyTimeHourOption"
    );
    const savedStudyTimeMinuteOption = localStorage.getItem(
      "studyTimeMinuteOption"
    );
    const savedStudySpeedOption = localStorage.getItem("studySpeedOption");

    savedStudySpeedOption &&
      setStudySpeedOption(parseFloat(savedStudySpeedOption));

    if (savedDaysOption) {
      setDaysOption(parseInt(savedDaysOption));
    }
    if (savedCheckboxStatus) {
      setCheckboxStatus(JSON.parse(savedCheckboxStatus));
    }
    if (savedStudyTimeHourOption && savedStudyTimeMinuteOption) {
      setStudyTimeOption({
        hours: parseInt(savedStudyTimeHourOption),
        minutes: parseInt(savedStudyTimeMinuteOption),
      });
    }
  }, [subjectCode]);

  useEffect(() => {
    setCurrentPage(1);
    localStorage.setItem("studyDaysOption", studyDaysOption.toString());
  }, [studyDaysOption]);

  useEffect(() => {
    localStorage.setItem(
      `checkboxStatus-${subjectCode}`,
      JSON.stringify(checkboxStatus)
    );
  }, [checkboxStatus, subjectCode]);

  useEffect(() => {
    setCurrentPage(1);
    localStorage.setItem(
      "savedStudyTimeHourOption",
      studyTimeOption.hours.toString()
    );
    localStorage.setItem(
      "studyTimeMinuteOption",
      studyTimeOption.minutes.toString()
    );
  }, [studyTimeOption]);

  const groupedVideos: Video[][] = [];
  let currentDay: Video[] = [];
  let currentTotalTime = 0;

  for (let i = 0; i < totalVideos; i++) {
    const video = data[i];
    const videoDuration = video.videoDurationInSeconds / studySpeedOption;

    if (currentTotalTime + videoDuration <= studyTimePerDay) {
      currentDay.push(video);
      currentTotalTime += videoDuration;
    } else {
      groupedVideos.push(currentDay);
      currentDay = [video];
      currentTotalTime = videoDuration;
    }
  }

  if (currentDay.length > 0) {
    groupedVideos.push(currentDay);
  }
  const filteredGroupedVideos = groupedVideos.filter((day) =>
    day.some((video) => !checkboxStatus[video.index])
  );

  const totalDays = groupedVideos.length;
  const totalDaysLeft = filteredGroupedVideos.length;
  const totalPages = Math.ceil(totalDays / daysPerPage);
  const startIndex = (currentPage - 1) * daysPerPage;
  const endIndex = startIndex + daysPerPage;

  const handleStudyDaysOption = (option: number) => {
    setDaysOption(option);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStudyTimeOption = (hours: number, minutes: number) => {
    setStudyTimeOption({
      hours: hours,
      minutes: minutes,
    });
  };

  const handleSpeedOption = (option: number) => {
    localStorage.setItem("studySpeedOption", option.toString());
    setStudySpeedOption(option);
  };

  return (
    <div className="container">
      <div className="backdrop-blur-md border-white/20 rounded-xl p-6 shadow-lg mt-12 bg-primary-foreground text-center border px-4 md:px-8 py-12 w-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          {subject}
        </h1>
        <div></div>
        <p className="text-lg md:text-2xl mt-2 text-white/60 py-2 px-4 max-w-fit text-right rounded-2xl bg-slate-900">
          Total Days Left: {totalDaysLeft}
        </p>
        <p className="text-2xl mt-2 text-white/60 py-2 px-4 text-right rounded-2xl">
          Total Number of Days: {totalDays}
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-4 mt-4 items-center">
        <StudyTimeHourCombobox
          studyTimeOption={studyTimeOption}
          handleStudyTimeOption={handleStudyTimeOption}
        />
        <StudyTimeMinuteCombobox
          studyTimeOption={studyTimeOption}
          handleStudyTimeOption={handleStudyTimeOption}
        />
        <SpeedCombobox
          speedOption={studySpeedOption}
          handleSpeedOption={handleSpeedOption}
        />
      </div>

      {groupedVideos.slice(startIndex, endIndex).map((videosForDay, index) => (
        <VideoAccordion
          key={index}
          day={startIndex + index + 1}
          videos={videosForDay.length}
          videosForDay={videosForDay}
          checkboxStatus={checkboxStatus}
          setCheckboxStatus={setCheckboxStatus}
        />
      ))}

      <div className="flex md:flex-row flex-col justify-between gap-4 mt-4 items-center">
        <StudyDaysCombobox
          studyDaysOption={studyDaysOption}
          handleStudyDaysOption={handleStudyDaysOption}
        />
        <div className="flex justify-center text-center">
          <Button
            className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            First
          </Button>
          <Button
            className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </Button>
          <Button className="mx-1 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-500">
            {currentPage}
          </Button>
          <Button
            className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
          <Button
            className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}
