function Modal({ closeModal, setColor, color }) {
  return (
    <div>
      <div
        className="absolute inset-0 backdrop-filter backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div className="absolute border border-[#d0d7de] dark:border-gray-500 inset-x-0 top-36 m-auto p-2 w-2/5 bg-[#f5f5f5] dark:bg-[#1C2128] rounded-md text-gitdark dark:text-white">
        <h1 className="p-2  text-2xl font-bold text-center">
          Customize Your view
        </h1>
        <div className="m-2 p-4 flex items-center justify-center">
          <button
            className="btn bg-red-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"
            onClick={() => setColor("red")}
          ></button>
          <button
            className="btn bg-pink-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"
            onClick={() => setColor("pink")}
          ></button>
          <button
            className="btn bg-yellow-400 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"
            onClick={() => setColor("yellow")}
          ></button>
          <button
            className="btn bg-blue-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"
            onClick={() => setColor("blue")}
          ></button>
          <button
            className="btn bg-green-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"
            onClick={() => setColor("green")}
          ></button>
          <button
            className="btn bg-indigo-500 hover:opacity-80 h-12 w-12 rounded-full mx-1 shadow-lg"
            onClick={() => setColor("indigo")}
          ></button>
        </div>
        <p className="text-center m-2 text-2xl font-extrabold">
          Choose which colors suits you the most.
        </p>
        <div className="flex justify-center items-center m-2">
          <button
            className={`btn btn-${color} h-12 rounded-lg shadow-lg`}
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
