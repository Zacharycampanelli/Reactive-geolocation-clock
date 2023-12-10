import React, { useContext } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';
import DrawerButton from '../DrawerButton/DrawerButton';
import ClockContext from '../../context';
import { formatTimeZone } from '../../utils/format';


export function ScreenDrawer({ expanded, setExpanded }) {
  const {timeZone, dayOfYear, dayOfWeek, weekNumber} = useContext(ClockContext)
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => {
    setOpen(true);
    setExpanded(true);
  };
  const closeDrawer = () => {
    setOpen(false);
    setExpanded(false);
  };

  return (
    <>
      <DrawerButton expanded={expanded} openDrawer={openDrawer}>Open Drawer</DrawerButton>
      <Drawer
        overlay={false}
        placement="bottom"
        size={250}
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-white/75 backdrop-blur-[20px]"
      >
        <div className="flex flex-col items-stretch justify-between mb-6 column flex-column h-[90%] pt-10">
          <span className="flex justify-between w-[100%]">
            <p className="text-[10px] text-darkGray leading-[28px] tracking-[2px]">CURRENT TIMEZONE</p>
            <p className="text-[20px] text-darkGray font-bold">{timeZone !== undefined && formatTimeZone(timeZone)}</p>
          </span>
          <span className="flex justify-between w-[100%]">
            <p className="text-[10px] text-darkGray leading-[28px] tracking-[2px]">DAY OF THE YEAR</p>
            <p className="text-[20px] text-darkGray font-bold">{dayOfYear}</p>
          </span>
          <span className="flex justify-between w-[100%]">
            <p className="text-[10px] text-darkGray leading-[28px] tracking-[2px]">DAY OF THE WEEK</p>
            <p className="text-[20px] text-darkGray font-bold">{dayOfWeek}</p>
          </span>
          <span className="flex justify-between w-[100%]">
            <p className="text-[10px] text-darkGray leading-[28px] tracking-[2px]">WEEK NUMBER</p>
            <p className="text-[20px] text-darkGray font-bold">{weekNumber}</p>
          </span>
        </div>
      </Drawer>
    </>
  );
}
