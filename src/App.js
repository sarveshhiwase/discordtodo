import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [curr, setCurrent] = useState(0);

  useEffect(() => {
    const getQuotes = async () => {
      const url = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
      const response = await fetch(url);
      const data = await response.json();
      setQuotes(data);
    };
    getQuotes();
  }, []);

  const previousSlide = () => {
    console.log((curr - 1 + quotes.length) % quotes.length);
    setCurrent((curr - 1 + quotes.length) % quotes.length);
  };

  const nextslide = () => {
    console.log((curr + 1) % quotes.length);
    setCurrent((curr + 1) % quotes.length);
  };

  return (
    <div className="min-h-screen bg-[#1C2128]">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        {quotes.length !== 0 && (
          <div className="w-3/5 my-3 p-4 border border-gray-500 bg-[#1C2128] rounded-lg text-[#adbac7]">
            <div className="inline-block text-2xl font-bold">
              {quotes[curr].character}
            </div>
            <div className="ml-2 inline text-lg font-bold">
              {quotes[curr].anime}
            </div>
            <p>{quotes[curr].quote}</p>
          </div>
        )}
        <div className="flex  justify-center items-center">
          <button
            onClick={previousSlide}
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
          <button
            onClick={nextslide}
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
