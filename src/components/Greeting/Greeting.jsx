import { useContext, useEffect, useState } from 'react';
import SvgIconSun from '../../assets/icons/IconSun';
import SvgIconMoon from '../../assets/icons/IconMoon';
import ClockContext from '../../context';

const Greeting = ({ time }) => {
  const {setDayRange} = useContext(ClockContext)
  const [icon, setIcon] = useState();
  const [phrase, setPhrase] = useState('');
  useEffect(() => {
    let hour = new Date(time).toTimeString().split(':')[0];
    hour = Number(hour);
    if (5 <= hour && hour < 12) {
      setIcon(<SvgIconSun />);
      setPhrase('Good morning');
      setDayRange('day')
    } else if (12 <= hour && hour < 18) {
      setIcon(<SvgIconSun />);
      setPhrase('Good afternoon');
      setDayRange('day')
    } else {
      setIcon(<SvgIconMoon />);
      setPhrase('Good Evening');
      setDayRange('night')
    }
  }, [time]);

  return (
    <div className="flex">
      {icon} <span className="ml-4 mb-4 text-[15px] text-white leading-[25px] tracking-[3px] uppercase">{phrase}</span>
    </div>
  );
};

export default Greeting;
