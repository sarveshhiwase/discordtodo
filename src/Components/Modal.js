function Modal({ closeModal }) {
  return (
    <div>
      <div
        className="absolute inset-0 backdrop-filter backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div className="absolute inset-x-0 top-36 m-auto w-1/2 bg-[#F6F8FA] dark:bg-white rounded-md ">
        <div className="flex items-center justify-between border border-gray-400 rounded-md p-4">
          <h1 className="text-2xl text-gitdark font-bold text-center">
            Customize Your view
          </h1>
          <div onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="m-4 p-4 flex items-center justify-center">
          <button className="btn bg-red-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"></button>
          <button className="btn bg-pink-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"></button>
          <button className="btn bg-yellow-400 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"></button>
          <button className="btn bg-blue-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"></button>
          <button className="btn bg-green-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"></button>
          <button className="btn bg-indigo-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"></button>
        </div>
        <p className="text-center m-2 text-2xl font-extrabold">
          Choose which colors suits you the most.
        </p>
        <div className="flex justify-center items-center m-2">
          <button
            className="btn bg-indigo-500 hover:bg-indigo-700 h-12 rounded-lg shadow-lg"
            onClick={closeModal}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
