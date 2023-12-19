import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import ClockContext from "../../context";
import { useFetch } from "../../hooks/useFetch";
import { useInterval } from "../../hooks/useInterval";
import Greeting from "../Greeting/Greeting";

// Define the Clock component
const Clock = ({ expanded }) => {
  // Destructure values from the ClockContext
  const {
    timeZoneAbr,
    setTimeZone,
    setTimeZoneAbr,
    setDayOfWeek,
    setDayOfYear,
    setWeekNumber,
  } = useContext(ClockContext);

  // State variables to manage time and trigger API calls
  const [time, setTime] = useState(null);
  const [toggleApiCall, setToggleApiCall] = useState(false);

  // URL for the World Time API
  const worldTimeAPIUrl = "http://worldtimeapi.org/api/ip";

  // Fetch data from the World Time API using custom useFetch hook
  const { data, isPending, error } = useFetch(worldTimeAPIUrl, toggleApiCall);

  // Trigger API call at regular intervals using custom useInterval hook
  useInterval(() => {
    toggleNewApiCall();
  }, [60000]);

  // Function to toggle API call trigger
  const toggleNewApiCall = () => {
    setToggleApiCall((prev) => !prev);
  };

  // Update state variables when new data is fetched
  useEffect(() => {
    if (data) {
      setTime(data.datetime);
      setTimeZone(data.timezone);
      setTimeZoneAbr(data.abbreviation);
      setDayOfWeek(data.day_of_week);
      setDayOfYear(data.day_of_year);
      setWeekNumber(data.week_number);
    }
  }, [data]);

  // Format the current time using dayjs library
  const formatTime = (current) => {
    return dayjs(current).format("h:mm");
  };

  // Display loading message while data is being fetched
  if (isPending) {
    return <h1>Loading...</h1>;
  }

  // Handle and display errors if there are issues with API call
  if (error) {
    console.error("Error in trying to retrieve time");
    console.error(error);
    return (
      <p className="text-[50px] font-bold leading-[100px] tracking-[-2.5px] text-red md:mt-[25%] md:text-[100px] md:leading-[175px] md:tracking-[-4.375px] lg:text-[150px] lg:leading-[200px] lg:tracking-[-5px]">
        Error: Reload Application
      </p>
    );
  }

  // Render the Clock component with formatted time and time zone details
  return (
    <div
      className={`mb-4 lg:mb-6 ${
        expanded
          ? `mt-[25%] md:mt-[12%] lg:mt-[0]`
          : `mt-[95%] md:mt-[80%] lg:mt-[30%]`
      }`}
    >
      <Greeting time={time} />
      <time className="text-[100px] font-bold leading-[100px] tracking-[-2.5px] text-white md:text-[175px] md:leading-[175px] md:tracking-[-4.375px] lg:text-[200px] lg:leading-[200px] lg:tracking-[-5px]">
        {formatTime(time)}
      </time>{" "}
      <span className="ml-1 text-[15px] font-light leading-7 text-white md:text-[32px] lg:text-[40px]">
        {timeZoneAbr}
      </span>
    </div>
  );
};

export default Clock;
