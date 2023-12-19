import { createContext, useState } from "react";

const ClockContext = createContext(null);

export function ClockContextProvider({ children }) {
  const [timeZone, setTimeZone] = useState();
  const [timeZoneAbr, setTimeZoneAbr] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [dayOfYear, setDayOfYear] = useState();
  const [weekNumber, setWeekNumber] = useState();
  const [dayRange, setDayRange] = useState();

  const modifyWeekDayNumber = (num) => {
    setDayOfWeek(++num);
  };

  const clockContextValue = {
    timeZone,
    setTimeZone,
    timeZoneAbr,
    setTimeZoneAbr,
    dayOfWeek,
    setDayOfWeek: modifyWeekDayNumber,
    dayOfYear,
    setDayOfYear,
    weekNumber,
    setWeekNumber,
    dayRange,
    setDayRange,
  };

  return (
    <ClockContext.Provider value={clockContextValue}>
      {children}
    </ClockContext.Provider>
  );
}

export default ClockContext;

