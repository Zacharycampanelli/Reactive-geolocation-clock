import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useFetch from '../../hooks/useFetch';

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
      setTime(dayjs(data.datetime).format('h:mm'));
      setTimeZone({ timezone: data.timezone, abbr: data.abbreviation });
      setDayOfWeek(data.day_of_week);
      setDayOfYear(data.day_of_year);
      setWeekNumber(data.week_number);
    }
  }, [data]);

  return <div>
   <time className='font-bold text-[100px] text-white leading-[100px] tracking-[-2.5px]'>{time}</time> <span className='font-light text-[15px] text-white leading-7'>{timeZone.abbr}</span>
  </div>;
};

export default Clock;
