import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const DisplayCity = () => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const ipInfoAPIUrl = `https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_APIKEY}`;
  
    const { data, isPending, error } = useFetch(ipInfoAPIUrl, null);


    useEffect(() => {
        if (data) {
            console.log(data)
            setCity(data.data.location.city.name)
            setCountry(data.data.location.country.ioc)
        }
      }, [data]);
  return (
    <div className='mt-4 mb-12 text-white text-[15px] font-bold leading-[28px] tracking-[3px] uppercase md:text-[18px] md:tracking-[3.6px] lg:24px lg:tracking-[4.8px] lg:inline'>
      in {`${city}, ${country}`}
    </div>
  )
}

export default DisplayCity
