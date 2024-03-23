import HazeIcon from "../../assets/haze.png";
import PartlyCloudyIcon from "../../assets/partlycloudy.png";
import RainIcon from "../../assets/rain.png";
import SnowIcon from "../../assets/snow.png";
import SunnyIcon from "../../assets/sunny.png";
import ThunderstormIcon from "../../assets/thunders.png";
import { IconDisplay } from "./styled";

type WeatherIconProps = {
  data: {
    main: string;
    description: string;
  };
};

const WeatherIcon = ({ data }: WeatherIconProps) => {
  let Icon;
  console.log(data);
  switch (data.main) {
    // Clear
    case "Clear":
      Icon = SunnyIcon;
      break;

    // PartlyCloudyIcon
    case "Clouds":
      Icon = PartlyCloudyIcon;
      break;

    // Drizzle
    case "Drizzle":
    case "Rain":
      Icon = RainIcon;
      break;

    // Thunderstorm
    case "Thunderstorm":
      Icon = ThunderstormIcon;
      break;

    // Snow
    case "Snow":
      Icon = SnowIcon;
      break;

    // Other (Mist,Smoke, etc) Default
    default:
      Icon = HazeIcon;
      break;
  }
  return <IconDisplay src={Icon} />;
};

export default WeatherIcon;
