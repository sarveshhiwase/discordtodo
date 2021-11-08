import moment from "moment";
import { bgcolor, emoji } from "../Utils/helpers";

function Task({ title, description, created, deleteTask, state }) {
  return (
    <div className="border border-[#d0d7de] dark:border-gray-500 bg-[#FFFFFF] dark:bg-[#2F3136] mt-2 rounded-lg text-gitdark dark:text-git p-4 flex justify-between shadow-lg">
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex items-center justify-center py-2">
          {/*<div className={"w-4 h-4 rounded-full mr-1 shadow-lg " + bgcolor(state)}></div>*/}
          <h2
            className={
              "rounded-md font-bold dark:text-white px-2 py-1 shadow-lg " +
              bgcolor(state)
            }
          >
            {emoji(state) + " " + state}
          </h2>
          <h3 className="ml-2">{moment(created).fromNow()}</h3>
        </div>
      </div>
      <div>
        <button
          className=" flex items-center justify-center"
          onClick={() => deleteTask(created)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] w-[20px] text-git hover:text-gitdark dark:hover:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Task;
