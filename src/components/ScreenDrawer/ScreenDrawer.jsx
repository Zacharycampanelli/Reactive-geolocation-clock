import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';
import DrawerButton from '../DrawerButton/DrawerButton';
import ClockContext from '../../context';
import { formatTimeZone } from '../../utils/format';
import { useMediaQuery } from '@uidotdev/usehooks';
import DrawerItem from '../DrawerItem/DrawerItem';

export function ScreenDrawer({ expanded, setExpanded }) {
  const { timeZone, dayOfYear, dayOfWeek, weekNumber, dayRange } = useContext(ClockContext);
  // const [open, setOpen] = useState(false);
  const [drawerBackground, setDrawerBackground] = useState('');
  const [drawerSize, setDrawerSize] = useState(0);
  const [textColor, setTextColor] = useState();

  const isPhoneSize = useMediaQuery('only screen and (max-width : 767px)');
  const isTabletSize = useMediaQuery('only screen and (min-width : 768px) and (max-width : 1439px)');
  const isDesktopSize = useMediaQuery('only screen and (min-width : 1440px)');

  let index = 0;

  const openDrawer = () => {
    // setOpen(true);
    setExpanded(true);
    changeDrawerSize();
  };
  const closeDrawer = () => {
    // setOpen(false);
    setExpanded(false);
  };

  useEffect(() => {
    if (dayRange === 'day') {
      setDrawerBackground('bg-white/75');
      setTextColor('text-darkGray');
    } else {
      setDrawerBackground('bg-black/75');
      setTextColor('text-white');
    }
  }, [dayRange]);

  const changeDrawerSize = () => {
    if (isPhoneSize) {
      setDrawerSize(250);
    }
    if (isTabletSize) {
      setDrawerSize(425);
    }
    if (isDesktopSize) {
      setDrawerSize(400);
    }
  };

  // useEffect(() => {

  // });

  return (
    <div className="relative lg:flex lg:justify-end lg:mt-[-5%]">
      <DrawerButton expanded={expanded} openDrawer={openDrawer}>
        Open Drawer
      </DrawerButton>
      <Drawer
        overlay={false}
        placement="bottom"
        size={drawerSize}
        open={expanded}
        onClose={closeDrawer}
        className={`${drawerBackground} z-10 px-4 backdrop-blur-[20px] md:px-16 md:py-0 lg:p-0`}
        >
        <div className="relative flex flex-col items-stretch justify-between mb-6 h-[90%] pt-10 md:mt-4 md:grid md:grid-cols-3 md:w-[100%] lg:mt-0 lg:grid-cols-4 lg:pl-[150px] lg:h-[85%] lg:pt-14">
          <DrawerItem
            label="CURRENT TIMEZONE"
            content={timeZone !== undefined && formatTimeZone(timeZone)}
            textColor={textColor}
            id={1}
            />
          <DrawerItem label="DAY OF THE YEAR" content={dayOfYear} textColor={textColor} id={2} />
          <DrawerItem label="DAY OF THE WEEK" content={dayOfWeek} textColor={textColor} id={3} />
          <DrawerItem label="WEEK NUMBER" content={weekNumber} textColor={textColor} id={4} />
      {isDesktopSize && <div className={`absolute h-[65%] top-[25%] left-[50%] border-l border-solid ${dayRange === 'day' ? 'border-darkGray' : 'border-white'} opacity-25`}></div> }
        </div>
      </Drawer>
    </div>
  );
}
