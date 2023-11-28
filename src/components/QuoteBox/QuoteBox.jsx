import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const QuoteBox = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [toggleApiCall, setToggleApiCall] = useState(false);
  const quotableAPIUrl = 'https://api.quotable.io/random';

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

  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col w-5/6 text-[12px] text-white leading-6">
        <blockquote className='mb-2'>{quote}</blockquote>
        <cite className='font-bold'>{author}</cite>
      </div>
      <button onClick={toggleNewQuote}>
      <FontAwesomeIcon icon={faArrowsRotate} className="text-white opacity-50" />
      </button>
    </div>
  );
};

export default QuoteBox;
