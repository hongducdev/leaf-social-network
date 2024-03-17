import React from "react";
import { Skeleton } from "../ui/skeleton";

const WeatherSkeleton = () => {
  return (
    <section className="bg-ctp-crust p-5 rounded-2xl">
      <Skeleton className="h-10 w-full rounded-full bg-ctp-base" />
      <div className="mt-5 flex flex-col items-center gap-2">
        <Skeleton className="h-10 w-1/2 rounded-full bg-ctp-base" />
        <Skeleton className="h-5 w-1/4 rounded-full bg-ctp-base" />
        <Skeleton className="h-10 w-1/3 rounded-full bg-ctp-base" />
        <Skeleton className="h-20 w-20 rounded bg-ctp-base" />
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="flex items-center flex-col">
            <Skeleton className="h-4 w-20 rounded-full bg-ctp-base" />
            <Skeleton className="h-4 w-32 rounded-full bg-ctp-base mt-1" />
          </div>
          <div className="flex items-center flex-col">
            <Skeleton className="h-4 w-20 rounded-full bg-ctp-base" />
            <Skeleton className="h-4 w-32 rounded-full bg-ctp-base mt-1" />
          </div>
          <div className="flex items-center flex-col">
            <Skeleton className="h-4 w-20 rounded-full bg-ctp-base" />
            <Skeleton className="h-4 w-32 rounded-full bg-ctp-base mt-1" />
          </div>
          <div className="flex items-center flex-col">
            <Skeleton className="h-4 w-20 rounded-full bg-ctp-base" />
            <Skeleton className="h-4 w-32 rounded-full bg-ctp-base mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSkeleton;
