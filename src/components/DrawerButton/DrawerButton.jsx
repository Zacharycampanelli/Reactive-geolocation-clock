import { useEffect, useState } from "react"

import SvgIconArrowDown from "../../assets/icons/IconArrowDown"
import SvgIconArrowUp from "../../assets/icons/IconArrowUp"

const DrawerButton = ({expanded, openDrawer}) => {
const [arrow, setArrow] = useState('down')

  useEffect(() => {
    expanded ? setArrow('up') : setArrow('down')
  }, [expanded])

  return (
    <button onClick={openDrawer} className="flex items-center rounded-[28px] bg-white w-1/e p-1 mb-2 " type="button">
      <p className="ml-2 mr-3 text-[12px] font-bold leading-[14px] tracking-[3.75px] opacity-50">{arrow === 'down' ? 'MORE' : 'LESS'}</p>
      <span className="w-8 h-8 rounded-[50%] bg-black inline-block relative">
     {arrow === 'down' ? <SvgIconArrowDown className="relative top-3 left-2"/> : <SvgIconArrowUp className="relative "/>}
      </span>
    </button>
  )
}


export default DrawerButton
