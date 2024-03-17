// hooks/useWeather.ts
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { IWeather } from "@/types/IWeather";

const useWeather = (searchQuery: string) => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const apiKey = process.env.NEXT_PUBLIC_API_WEATHER_KEY;

  // Get user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  // Get weather data
  useEffect(() => {
    if ((latitude && longitude && apiKey) || searchQuery) {
      setIsLoading(true);
      let apiUrl;
      if (searchQuery) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}`;
      } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      }
      axios
        .get(apiUrl)
        .then((res) => {
          setWeather(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [latitude, longitude, apiKey, searchQuery]);

  return { weather, isLoading };
};

export default useWeather;
