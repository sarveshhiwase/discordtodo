function Navbar() {
  return (
    <nav className="flex p-4 bg-[#2D333B] justify-between items-center">
      <div className="flex items-center justify-center">
        <div className="flex justify-center hover:bg-blue-600 cursor-pointer bg-[#38bdf8] rounded-md">
          <svg className="h-12 w-12" viewBox="0 0 24 24">
            <path
              d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
              fill="#93C5FD"
            ></path>
            <path
              d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
              fill="#BFDBFE"
            ></path>
            <path
              d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
              fill="#EFF6FF"
            ></path>
            <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold hover:text-indigo-300 cursor-pointer text-white ml-2">
          GitHub Todo
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="rounded-full p-1 bg-[#FBBF24] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
