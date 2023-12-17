import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import SvgIconRefresh from '../../assets/icons/IconRefresh';
const QuoteBox = ({expanded}) => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [toggleApiCall, setToggleApiCall] = useState(false);
  const quotableAPIUrl = 'https://api.quotable.io/random?minLength=100&tags=technology';

  
  const { data, isPending, error } = useFetch(quotableAPIUrl, toggleApiCall);

  useEffect(() => {
    if (data) {
      setQuote(data.content);
      setAuthor(data.author);
    }
  }, [data]);

  const toggleNewQuote = () => {
    setToggleApiCall((prev) => !prev)
  }

  if(isPending) {
    return (<h1>Loading...</h1>)
  }

  if(error)  {
    console.error("Error in trying to retrieve Quotation")
    console.error(error)
    return 
  }

  return (
    <div className={`absolute flex items-start justify-between w-[85%] md:justify-evenly lg:w-[50%] ${expanded ? `hidden` : ``}`}>
      <div className="flex flex-col w-[83%] text-[12px] text-white leading-6 md:text-[18px] md:leading-7 md:w-[90%]">
        <blockquote className='mb-2 md:mb-3'>{quote}</blockquote>
        <cite className='font-bold'>{author}</cite>
      </div>
      <button onClick={toggleNewQuote}>
      <SvgIconRefresh />
      </button>
    </div>
  );
};

export default QuoteBox;
