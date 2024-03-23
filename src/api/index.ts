import { GEO_API_URL, WEATHER_API_URL } from "./endpoint";
import { placeType, weatherInfoType } from "../types/index";

export async function fetchLocation(searchText: string): Promise<placeType[]> {
  try {
    const response = await fetch(`${GEO_API_URL}&q=${searchText}`);
    const data: placeType[] = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch location data");
  }
}

export async function fetchWeather(
  location: placeType
): Promise<weatherInfoType> {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}&lat=${location.lat}&lon=${location.lon}&units=metric`
    );

    const data: weatherInfoType = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch location data");
  }
}
