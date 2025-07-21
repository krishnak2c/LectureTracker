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
      <div className="bg-sky-600 hover:bg-sky-900 border-r-white rounded-full mt-10">
        <Link href="/subject">
          <Button className="rounded-3xl">Begin Preparation</Button>
        </Link>
      </div></div>
  )}


export default WelcomeBox;
