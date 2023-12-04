import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import DrawerButton from "../DrawerButton/DrawerButton";
 
export function ScreenDrawer({setExpanded}) {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => {setOpen(true);setExpanded((true))}
  const closeDrawer = () => {setOpen(false);setExpanded(false)}
 
  return (
    <>
      <DrawerButton openDrawer={openDrawer}>Open Drawer</DrawerButton>
      <Drawer overlay={false} placement="bottom" open={open} onClose={closeDrawer} className="p-4 bg-white/75 backdrop-blur-[20px]">
        <div className="flex items-center justify-between mb-6">
        <span><p>CURRENT TIMEZONE</p></span>
        
        </div>
      </Drawer>
    </>
  );
}
