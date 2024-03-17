"use client";
import useWeather from "@/hooks/useWeather";
import Image from "next/image";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import WeatherSkeleton from "./WeatherSkeleton";

const Weather = () => {
  const [search, setSearch] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { weather, isLoading } = useWeather(searchQuery);

  if (isLoading) {
    return <WeatherSkeleton />;
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(search);
    setSearch("");
  };

  if (weather) {
    return (
      <section className="bg-ctp-crust p-5 rounded-2xl">
        <form
          className="flex items-center bg-ctp-base px-2 rounded-full"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="bg-transparent outline-none border-none py-2 px-2 w-full"
            placeholder="Search for places"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="p-2">
            <RiSearch2Line className="text-2xl" />
          </button>
        </form>
        <div className="flex items-center justify-center gap-x-5 mt-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">{weather.name}</h1>
            <span className="">{weather?.weather[0].main}</span>
            <span className="text-4xl">
              {Math.round(weather.main?.temp - 273.15)}°C
            </span>
            <Image
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
              alt={weather?.weather[0].description}
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-center">
            <p className="text-ctp-subtext1">Sunrise</p>
            <span className="font-semibold text-lg">
              {new Date(weather.sys?.sunrise * 1000).toLocaleTimeString()}
            </span>
          </div>
          <div className="text-center">
            <p className="text-ctp-subtext1">Sunset</p>
            <span className="font-semibold text-lg">
              {new Date(weather.sys?.sunset * 1000).toLocaleTimeString()}
            </span>
          </div>
          <div className="text-center">
            <p className="text-ctp-subtext1">Humidity</p>
            <span className="font-semibold text-lg">
              {weather.main?.humidity}%
            </span>
          </div>
          <div className="text-center">
            <p className="text-ctp-subtext1">Wind</p>
            <span className="font-semibold text-lg">
              {weather.wind?.speed}km/h
            </span>
          </div>
        </div>
      </section>
    );
  } else {
    return <WeatherSkeleton />;
  }
};

export default Weather;
