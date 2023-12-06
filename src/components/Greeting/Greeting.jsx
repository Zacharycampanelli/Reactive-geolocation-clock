import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SvgIconSun from '../../assets/icons/IconSun';
import SvgIconMoon from '../../assets/icons/IconMoon';

const Greeting = ({ time }) => {
  const [icon, setIcon] = useState();
  const [phrase, setPhrase] = useState('');
  useEffect(() => {
    // let hour = dayjs(time).format('H');
    let hour = new Date(time).toTimeString().split(':')[0];
    hour = Number(hour);
    if (5 <= hour && hour < 12) {
      setIcon(<SvgIconSun />);
      setPhrase('Good morning');
    } else if (12 <= hour && hour < 18) {
      setIcon(<SvgIconSun />);
      setPhrase('Good afternoon');
    } else {
      setIcon(<SvgIconMoon />);
      setPhrase('Good Evening');
    }
  }, [time]);

  return (
    <div className="flex">
      {icon} <span className="ml-4 mb-4 text-[15px] text-white leading-[25px] tracking-[3px] uppercase">{phrase}</span>
    </div>
  );
};

export default Greeting;
