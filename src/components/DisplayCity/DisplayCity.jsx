import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const DisplayCity = () => {
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    // const ipInfoAPIUrl = `https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_APIKEY}`;
    const ipInfoAPIUrl = `https://api.geoapify.com/v1/ipinfo?ip=3.8.4.49&apiKey=${import.meta.env.VITE_APIKEY}`;
  
    const { data, isPending, error } = useFetch(ipInfoAPIUrl, null);


    useEffect(() => {
        if (data) {
            setCity(data.city.name)
            setState(data.state.name)
            setCountry(data.country.iso_code)
        }
      }, [data]);

      if(isPending) {
        return (<h1>Loading...</h1>)
      }

      if(error)  {
        console.error("Error in trying to retrieve IP geolocation")
        console.error(error)
        return 
      }

  return (
    <div className='mt-4 mb-[70px] text-white text-[13px] font-bold leading-[28px] tracking-[3px] uppercase md:text-[18px] md:tracking-[3.6px] lg:text-[24px] lg:tracking-[4.8px] lg:inline lg:mt-6'>
      in {`${city}, ${state} ${country}`}
    </div>
  )
}

export default DisplayCity
