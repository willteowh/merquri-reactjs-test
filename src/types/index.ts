export type searchQueryType = {
  place: placeType;
  timestamp: Date;
};

export type placeType = {
  lat: number;
  lon: number;
  name: string;
  country: string;
};

export type weatherInfoType = {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  name: string;
};

export type searchResultType = {
  place: placeType;
  weatherInfo: weatherInfoType;
  timestamp: Date;
};
