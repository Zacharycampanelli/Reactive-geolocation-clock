import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useFetch from '../../hooks/useFetch';
import Greeting from '../Greeting/Greeting';
import ClockContext from '../../context';
import { useInterval } from '../../hooks/useInterval';

const Clock = ({ expanded }) => {
  const { timeZoneAbr, setTimeZone, setTimeZoneAbr, setDayOfWeek, setDayOfYear, setWeekNumber } =
    useContext(ClockContext);
  const [time, setTime] = useState(null);
  const [toggleApiCall, setToggleApiCall] = useState(false);
  const worldTimeAPIUrl = 'http://worldtimeapi.org/api/ip';

  const { data, isPending, error } = useFetch(worldTimeAPIUrl, toggleApiCall);

  useInterval(() => {
    toggleNewApiCall();
    console.log(time)
  }, [60000]);

  const toggleNewApiCall = () => {
    setToggleApiCall((prev) => !prev);
  };

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

  const formatTime = (current) => {
    return dayjs(current).format('h:mm');
  };

  return (
    // <div className='absolute top-[66%] -translate-y-2/3	'>
    <div className={`mb-4` && expanded ? `mt-[25%]` : `mt-[70%]`}>
      <Greeting time={time} />
      <time className="font-bold text-[100px] text-white leading-[100px] tracking-[-2.5px]">
        {formatTime(time)}
      </time>{' '}
      <span className="ml-1 font-light text-[15px] text-white leading-7">{timeZoneAbr}</span>
    </div>
  );
};

export default Clock;
