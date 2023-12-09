import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import ClockContext from '../context';

const Background = ({ children }) => {
  const { dayRange } = useContext(ClockContext);
  const [image, setImage] = useState('');

  const isPhoneSize = useMediaQuery('only screen and (max-width : 768px)');
  const isTabletSize = useMediaQuery('only screen and (min-width : 769px) and (max-width : 1439px)');
  const isDesktopSize = useMediaQuery('only screen and (min-width : 1440px)');

  useEffect(() => {
    if (isPhoneSize) {
      if (dayRange === 'day') {
        setImage('bg-mobileDaytime');
      } else {
        setImage('bg-mobileNighttime');
      }
    } else if (isTabletSize) {
      if (dayRange === 'day') {
        setImage('bg-tabletDaytime');
      } else {
        setImage('bg-tabletNighttime');
      }
    } else {
      if (dayRange === 'day') {
        setImage('bg-desktopDaytime');
      } else {
        setImage('bg-desktopNighttime');
      }
    }
  }, [dayRange, isPhoneSize, isTabletSize, isDesktopSize]);

  return (
    <div className={`w-full h-full min-w-full min-h-full bg-fixed bg-center bg-cover ${image} g-no-repeat`}>
      {children}
    </div>
  );
};

export default Background;
