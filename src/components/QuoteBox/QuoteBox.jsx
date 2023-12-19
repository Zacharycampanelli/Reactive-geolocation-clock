import { useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import SvgIconRefresh from "../../assets/icons/IconRefresh";

// Define the QuoteBox component
const QuoteBox = ({ expanded }) => {
  // State variables for storing quote and author information
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [toggleApiCall, setToggleApiCall] = useState(false);

  // API URL for fetching a random quote with a technology tag
  const quotableAPIUrl = "https://api.quotable.io/random?minLength=100&tags=technology";

  // Custom hook useFetch to handle the API call
  const { data, isPending, error } = useFetch(quotableAPIUrl, toggleApiCall);

  // Effect to update the quote and author when new data is fetched
  useEffect(() => {
    if (data) {
      setQuote(data.content);
      setAuthor(data.author);
    }
  }, [data]);

  // Function to toggle the API call for fetching a new quote
  const toggleNewQuote = () => {
    setToggleApiCall((prev) => !prev);
  };

  // Render different content based on loading, error, or successful data fetch
  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.error("Error in trying to retrieve Quotation");
    console.error(error);
    return;
  }

  // Render the QuoteBox component with dynamic styling and fetched data
  return (
    <div
      className={`absolute flex w-[85%] items-start justify-between md:w-[80%] md:justify-evenly lg:w-[50%] ${expanded ? "hidden" : ""}`}
    >
      <div className="flex w-[83%] flex-col text-[12px] leading-6 text-white  md:w-[85%] md:text-[18px] md:leading-7">
        <blockquote className="mb-2 md:mb-3">{quote}</blockquote>
        <cite className="font-bold">{author}</cite>
      </div>
      <button onClick={toggleNewQuote}>
        <SvgIconRefresh />
      </button>
    </div>
  );
};

export default QuoteBox;
