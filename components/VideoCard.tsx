"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

function capitalizeFirstLetter(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

function formatTime(timeString: string): string {
  const parts = timeString.split(":");
  const formattedParts = parts.map((part) => {
    part = part.trim();
    if (part.length === 1) {
      return `0${part}`;
    }
    return part;
  });

  return formattedParts.join(":");
}

type TVideoCard = {
  video: Video;
  checkboxStatus: Record<string, boolean>;
  setCheckboxStatus: Dispatch<SetStateAction<Record<string, boolean>>>;
};

export default function VideoCard({
  video,
  checkboxStatus,
  setCheckboxStatus,
}: TVideoCard) {
  const isChecked = checkboxStatus[video.index];

  const handleCheckboxChange = (index: string) => {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [index]: !prevStatus[index],
    }));
  };

  return (
    <div
      className={`flex border rounded-lg p-4 ${
        isChecked ? "bg-green-400/60" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={video.thumbnailUrl}
            alt={video.videoTitle}
            width={100} // ✅ Define either width + height OR layout="fill"
            height={56}
            className="rounded-lg h-[56px] w-auto"
            style={{ maxWidth: "fit-content" }} // optional: mimic `max-w-fit`
            unoptimized={false} // default: true if using external domain in next.config.js
          />
        </a>
        <a
          href={video.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-medium flex-grow truncate hover:underline ml-2"
        >
          {capitalizeFirstLetter(video.videoTitle)}
        </a>
        <div className="flex items-center gap-2 ml-1">
          <p className="text-md text-white/60">{formatTime(video.videoTime)}</p>
          <Checkbox
            checked={isChecked}
            onCheckedChange={() => handleCheckboxChange(video.index)}
          />
        </div>
      </div>
    </div>
  );
}
