import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const DisplayCity = () => {
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const ipInfoAPIUrl = `https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_APIKEY}`;
  
    const { data, isPending, error } = useFetch(ipInfoAPIUrl, null);


    useEffect(() => {
        if (data) {
            console.log(data)
            setCity(data.city.name)
            setState(data.state.name)
            setCountry(data.country.iso_code)
        }
      }, [data]);
  return (
    <div className='mt-4 mb-12 text-white text-[15px] font-bold leading-[28px] tracking-[3px] uppercase md:text-[18px] md:tracking-[3.6px] lg:24px lg:tracking-[4.8px] lg:inline lg:mt-6'>
      in {`${city}, ${state} ${country}`}
    </div>
  )
}

export default DisplayCity
