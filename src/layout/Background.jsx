import mobileDaytime from '../assets/mobile/bg-image-daytime.jpg'

const Background = ({children}) => {
  return (
    <div  className='w-full h-full min-w-full min-h-full bg-mobileDaytime g-no-repeat bg-cover bg-center bg-fixed'>
      {children}
    </div>
  )
}

export default Background
