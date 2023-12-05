import mobileDaytime from '../assets/mobile/bg-image-daytime.jpg'

const Background = ({children}) => {
  return (
    <div  className='w-full h-full min-w-full min-h-full bg-fixed bg-center bg-cover bg-mobileDaytime g-no-repeat'>
      {children}
    </div>
  )
}

export default Background
