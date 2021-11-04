import { useState } from "react";

function InputModal({ closeModal, createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const AddTask = () => {
    if (title !== "" && description !== "") {
      createTask(title, description);
      closeModal();
    } else {
      alert("Enter Title and Description");
    }
  };

  return (
    <div>
      <div
        className="absolute inset-0 backdrop-filter backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="absolute inset-x-0 top-64 m-auto w-[400px] bg-[#22272E] border border-gray-500 rounded-md ">
        <header className="bg-[#2D333B] text-center p-3 w-full">
          <h1 className="text-lg text-git font-bold">Add Your Todo</h1>
        </header>
        <div className="border-b border-t border-gray-500 p-4 flex flex-col items-center justify-center">
          <div className="w-full">
            <label htmlFor="title" className="text-git font-bold">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Enter Todo Title"
              className="w-full mt-2 bg-[#1C2128] p-3 border border-gray-500 text-white rounded-md focus:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="w-full m-4">
            <label htmlFor="description" className="text-git font-bold">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              cols="30"
              rows="5"
              type="text"
              placeholder="Enter Todo Description"
              className="w-full mt-2 bg-[#1C2128] p-3 border border-gray-500 text-white rounded-md focus:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="btn my-4 mr-2 rounded-md bg-green-600 hover:bg-green-700"
            onClick={AddTask}
          >
            Add Task
          </button>
          <button
            className="btn my-4 mr-2 rounded-md bg-red-600 hover:bg-red-700"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
