import { useState } from "react";

function InputModal({ closeModal, createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskstate, setTaskState] = useState("uncompleted");

  const AddTask = () => {
    if (title !== "" && description !== "" && taskstate !== "") {
      createTask(title, description, taskstate);
      closeModal();
    } else {
      alert("Enter Title and Description and task state");
    }
  };

  return (
    <div>
      <div
        className="absolute inset-0 backdrop-filter backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="absolute inset-x-0 top-20 md:top-24 lg:top-36 m-auto w-[350px] bg-[#f0f8ff] dark:bg-[#22272E] border border-gray-500 rounded-md dark:text-git text-gitdark">
        <div className="flex items-center justify-end dark:bg-[#2D333B] bg-[#F6F8FA] p-2">
          <header className=" text-center w-full">
            <h1 className="text-lg font-bold">Add Your Todo</h1>
          </header>
          <div onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="border-b border-t border-gray-500 p-4 flex flex-col items-center justify-center">
          <div className="w-full">
            <label htmlFor="title" className="font-bold">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Enter Todo Title"
              className="w-full mt-2  dark:bg-[#1C2128] bg-[#f0ffff] p-2 border border-gray-500 rounded-md focus:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="w-full m-4">
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              cols="30"
              rows="5"
              type="text"
              placeholder="Enter Todo Description"
              className="w-full mt-2  dark:bg-[#1C2128] bg-[#f0ffff] p-2 border border-gray-500 rounded-md focus:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="w-full">
            <label htmlFor="taskstate" className="font-bold">
              Task State
            </label>
            <select
              className="w-full mt-2  dark:bg-[#1C2128] bg-[#f0ffff] p-2 border border-gray-500 rounded-md focus:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="taskstate"
              onChange={(e) => setTaskState(e.target.value)}
            >
              <option value="uncompleted">Uncompleted</option>
              <option value="inprogress">In Progress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            className="btn my-4 mr-2 rounded-md bg-red-500 hover:bg-red-600"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="btn my-4 mr-2 rounded-md bg-[#347d39] hover:bg-[#46954A]"
            onClick={AddTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
