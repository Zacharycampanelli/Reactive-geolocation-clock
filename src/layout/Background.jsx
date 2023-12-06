import { useContext, useEffect, useState } from 'react'
import mobileDaytime from '../assets/mobile/bg-image-daytime.jpg'
import mobileNighttime from '../assets/mobile/bg-image-nighttime.jpg'

import ClockContext from '../context'


const Background = ({children}) => {
  const {dayRange} = useContext(ClockContext);
  const [image, setImage] = useState('')

  useEffect(() => {
    if(dayRange === 'day') setImage('mobileDaytime')
    else setImage('mobileNighttime')
  }, [dayRange])
  return (
    <div  className={`w-full h-full min-w-full min-h-full bg-fixed bg-center bg-cover bg-${image} g-no-repeat`}>
      {children}
    </div>
  )
}

export default Background
