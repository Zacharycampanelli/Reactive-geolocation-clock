import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const DisplayCity = () => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const ipInfoAPIUrl = `https://api.ipbase.com/v2/info?apikey=ipb_live_USjaqi8RZx3XXbRz2uJxhkj32xg3UFSeffn4Kr7j`;
  
    const { data, isPending, error } = useFetch(ipInfoAPIUrl, null);


    useEffect(() => {
        if (data) {
            console.log(data)
            setCity(data.data.location.city.name)
            setCountry(data.data.location.country.ioc)
        }
      }, [data]);
  return (
    <div className='mb-12 text-white text-[15px] font-bold leading-[28px] tracking-[3px] uppercase'>
      in {`${city}, ${country}`}
    </div>
  )
}

export default DisplayCity
