import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import ClockContext from "../../context";
import SvgIconSun from "../../assets/icons/IconSun";
import SvgIconMoon from "../../assets/icons/IconMoon";

const Greeting = ({ time }) => {
  const { setDayRange } = useContext(ClockContext);
  const [icon, setIcon] = useState();
  const [phrase, setPhrase] = useState("");

  const isTabletSize = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)",
  );

  useEffect(() => {
    let hour = new Date(time).toTimeString().split(":")[0];
    hour = Number(hour);

    if (5 <= hour && hour < 12) {
      setIcon(<SvgIconSun />);
      setPhrase("Good morning");
      setDayRange("day");
    } else if (12 <= hour && hour < 18) {
      setIcon(<SvgIconSun />);
      setPhrase("Good afternoon");
      setDayRange("day");
    } else {
      setIcon(<SvgIconMoon />);
      setPhrase("Good Evening");
      setDayRange("night");
    }
  }, [time]);

  return (
    <div className="flex">
      {icon}{" "}
      <span className="mb-4 ml-4 text-[15px] uppercase leading-[25px] tracking-[3px] text-white md:text-[18px] md:leading-[28px] md:tracking-[3.6px] lg:text-[20px] lg:tracking-[4px]">
        {phrase}
        {isTabletSize && ", It's currently"}
      </span>
    </div>
  );
};

export default Greeting;
