import { useState } from "react"

import SvgIconArrowDown from "../../assets/icons/IconArrowDown"
import SvgIconArrowUp from "../../assets/icons/IconArrowUp"

const Button = () => {
  const [arrowDown, setArrowDown] = useState(true)


  return (
    <button className="flex items-center rounded-[28px] bg-white w-1/e p-2">
      <p className="ml-2 mr-3 text-[12px] font-bold leading-[14px] tracking-[3.75px] opacity-50">MORE</p>
      <span className="w-8 h-8 rounded-[50%] bg-black inline-block relative">
      <SvgIconArrowDown className="relative top-3 left-2"/>
      </span>
    </button>
  )
}

export default Button
