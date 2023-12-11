import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';
import DrawerButton from '../DrawerButton/DrawerButton';
import ClockContext from '../../context';
import { formatTimeZone } from '../../utils/format';
import { useMediaQuery } from '@uidotdev/usehooks';
import DrawerItem from '../DrawerItem/DrawerItem';

export function ScreenDrawer({ expanded, setExpanded }) {
  const { timeZone, dayOfYear, dayOfWeek, weekNumber, dayRange } = useContext(ClockContext);
  const [open, setOpen] = useState(false);
  const [drawerBackground, setDrawerBackground] = useState('');
  const [drawerSize, setDrawerSize] = useState(0);
  const [textColor, setTextColor] = useState();

  const isPhoneSize = useMediaQuery('only screen and (max-width : 768px)');
  const isTabletSize = useMediaQuery('only screen and (min-width : 769px) and (max-width : 1439px)');
  const isDesktopSize = useMediaQuery('only screen and (min-width : 1440px)');

  const openDrawer = () => {
    setOpen(true);
    setExpanded(true);
    changeDrawerSize()
  };
  const closeDrawer = () => {
    setOpen(false);
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
      setDrawerSize(450);
    }
  }

  // useEffect(() => {
    
  // });

  return (
    <>
      <DrawerButton expanded={expanded} openDrawer={openDrawer}>
        Open Drawer
      </DrawerButton>
      <Drawer
        overlay={false}
        placement="bottom"
        size={drawerSize}
        open={expanded}
        onClose={closeDrawer}
        className={`${drawerBackground} p-4  backdrop-blur-[20px] md:px-16 md:py-8`}
      >
        <div className="flex flex-col items-stretch justify-between mb-6 column flex-column h-[90%] pt-10 md:grid md:grid-cols-3 md:w-[100%] ">
          <DrawerItem
            label="CURRENT TIMEZONE"
            content={timeZone !== undefined && formatTimeZone(timeZone)}
            textColor={textColor}
            columns={2}
          />
          <DrawerItem label="DAY OF THE YEAR" content={dayOfYear} textColor={textColor} />
          <DrawerItem label="DAY OF THE WEEK" content={dayOfWeek} textColor={textColor} columns={2}/>
          <DrawerItem label="WEEK NUMBER" content={weekNumber} textColor={textColor} />
        </div>
      </Drawer>
    </>
  );
}
