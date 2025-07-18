import React from "react";
import { Button } from "./ui/button";
import { Balancer } from "react-wrap-balancer";
import Link from "next/link";

const WelcomeBox = () => {
  return (
    <div className="relative isolate overflow-hidden bg-primary-foreground border px-6 py-24 text-center rounded-3xl sm:px-16 w-full my-auto h-[500px] flex flex-col items-center justify-center">
      <h2>
        <Balancer className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to LectureTracker
        </Balancer>
      </h2>
      <p>
        <Balancer className="mx-auto mt-6 max-w-xl text-lg leading-8 ">
          Master your CSE preperation. LectureTracker is an application which helps Computer Science &
          Engineering students to track progress through video lecture series.
        </Balancer>
      </p>
      <div className="bg-slate-600 hover:bg-sky-700 rounded-full mt-10">
        <Link href="/subject">
          <Button className="rounded-3xl">Begin Preparation</Button>
        </Link>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
          fillOpacity="0.8"
        ></circle>
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#0061ff"></stop>
            <stop offset="1" stopColor="#60efff"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WelcomeBox;
