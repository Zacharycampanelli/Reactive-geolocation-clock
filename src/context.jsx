import { createContext, useState } from 'react';

const ClockContext = createContext(null);

export function ClockContextProvider({ children }) {
    const [timeZone, setTimeZone] = useState()
    const [timeZoneAbr, setTimeZoneAbr] = useState()
    const [dayOfWeek, setDayOfWeek] = useState()
    const [dayOfYear, setDayOfYear] = useState()
    const [weekNumber, setWeekNumber] = useState()

  const clockContextValue = {
    timeZone,
    setTimeZone,
    timeZoneAbr, 
    setTimeZoneAbr, 
    dayOfWeek, 
    setDayOfWeek,
    dayOfYear, 
    setDayOfYear,
    weekNumber, 
    setWeekNumber
  };

  return <ClockContext.Provider value={clockContextValue}>{children}</ClockContext.Provider>;
}

export default ClockContext;
