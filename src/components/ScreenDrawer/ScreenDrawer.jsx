import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';
import DrawerButton from '../DrawerButton/DrawerButton';
import ClockContext from '../../context';
import { formatTimeZone } from '../../utils/format';


export function ScreenDrawer({ expanded, setExpanded }) {
  const {timeZone, dayOfYear, dayOfWeek, weekNumber, dayRange} = useContext(ClockContext)
  const [open, setOpen] = useState(false);
  const [drawerBackground, setDrawerBackground] = useState('')
  const [textColor, setTextColor] = useState()
  const openDrawer = () => {
    setOpen(true);
    setExpanded(true);
  };
  const closeDrawer = () => {
    setOpen(false);
    setExpanded(false);
  }; 

  useEffect(() => {
    if (dayRange === 'day') {
      setDrawerBackground('bg-white/75') 
      setTextColor('text-darkGray') 
    } else {
      setDrawerBackground('bg-black/75')  
      setTextColor('text-white')
    }
  },[dayRange])

  return (
    <>
      <DrawerButton expanded={expanded} openDrawer={openDrawer}>Open Drawer</DrawerButton>
      <Drawer
        overlay={false}
        placement="bottom"
        size={250}
        open={open}
        onClose={closeDrawer}
        className={`${drawerBackground} p-4  backdrop-blur-[20px]`}
      >
        <div className="flex flex-col items-stretch justify-between mb-6 column flex-column h-[90%] pt-10">
          <span className={`${textColor} flex justify-between w-[100%]`}>
            <p className="text-[10px] leading-[28px] tracking-[2px]">CURRENT TIMEZONE</p>
            <p className="text-[20px] font-bold">{timeZone !== undefined && formatTimeZone(timeZone)}</p>
          </span>
          <span className={`${textColor} flex justify-between w-[100%]`}>
            <p className="text-[10px] leading-[28px] tracking-[2px]">DAY OF THE YEAR</p>
            <p className="text-[20px] font-bold">{dayOfYear}</p>
          </span>
          <span className={`${textColor} flex justify-between w-[100%]`}>
            <p className="text-[10px] leading-[28px] tracking-[2px]">DAY OF THE WEEK</p>
            <p className="text-[20px] font-bold">{dayOfWeek}</p>
          </span>
          <span className={`${textColor} flex justify-between w-[100%]`}>
            <p className="text-[10px] leading-[28px] tracking-[2px]">WEEK NUMBER</p>
            <p className="text-[20px] font-bold">{weekNumber}</p>
          </span>
        </div>
      </Drawer>
    </>
  );
}
