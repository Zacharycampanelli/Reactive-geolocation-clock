import { useEffect, useState } from "react"

import SvgIconArrowDown from "../../assets/icons/IconArrowDown"
import SvgIconArrowUp from "../../assets/icons/IconArrowUp"

const DrawerButton = ({expanded, openDrawer}) => {
const [arrow, setArrow] = useState('down')

  useEffect(() => {
    expanded ? setArrow('up') : setArrow('down')
  }, [expanded])

  return (
    <button onClick={openDrawer} className="flex justify-center items-center rounded-[28px] bg-white w-[35%] p-1 mb-2 md:w-[22%] md:p-3 lg:w-auto" type="button">
      <p className="ml-2 mr-3 text-[12px] font-bold leading-[14px] tracking-[3.75px] opacity-50 md:text-[16px] md:leading-[28px] tracking-[5px] ">{arrow === 'down' ? 'MORE' : 'LESS'}</p>
      <span className="w-8 h-8 rounded-[50%] bg-black inline-block relative hover:bg-darkGray">
     {arrow === 'down' ? <SvgIconArrowDown /> : <SvgIconArrowUp className="relative "/>}
      </span>
    </button>
  )
}


export default DrawerButton
