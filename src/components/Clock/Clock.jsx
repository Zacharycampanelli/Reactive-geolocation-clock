import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useFetch from '../../hooks/useFetch';
import Greeting from '../Greeting/Greeting';

const Clock = () => {
  const [time, setTime] = useState(null);
  const [timeZone, setTimeZone] = useState({ timezone: null, abbr: null });
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [weekNumber, setWeekNumber] = useState(null);
  const worldTimeAPIUrl = 'http://worldtimeapi.org/api/ip';

  const { data, isPending, error } = useFetch(worldTimeAPIUrl, null);
  useEffect(() => {
    if (data) {
      setTime(data.datetime);
      setTimeZone({ timezone: data.timezone, abbr: data.abbreviation });
      setDayOfWeek(data.day_of_week);
      setDayOfYear(data.day_of_year);
      setWeekNumber(data.week_number);
    }
  }, [data]);

  const formatTime = (current) => {
    return dayjs(current).format('h:mm')
  }

  return (
    <div>
    <Greeting time={time} />
      <time className="font-bold text-[100px] text-white leading-[100px] tracking-[-2.5px]">{formatTime(time)}</time>{' '}
      <span className="ml-1 font-light text-[15px] text-white leading-7">{timeZone.abbr}</span>
    </div>
  );
};

export default Clock;
