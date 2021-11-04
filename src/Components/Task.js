import moment from "moment";

function Task({ title, description, created,deleteTask }) {
  return (
    <div className="border border-gray-500 bg-[#22272E] m-2 rounded-lg text-git p-4 flex justify-between">
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex items-center justify-center py-2">
          <div className="w-4 h-4 rounded-full bg-[#DA5B0B] mr-1"></div>
          <h2 class="bg-indigo-600 rounded-md font-bold text-white p-1">Uncompleted</h2>
          <h3 className="ml-2">
            {moment(created)
              .fromNow()}
          </h3>
        </div>
      </div>
      <div>

      	<button
            className="btn rounded-md bg-red-600 hover:bg-red-700 flex items-center justify-center"
            onClick={() => deleteTask(created)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
            <span className="font-bold">Delete</span>
          </button>
      </div>
    </div>
  );
}
export default Task;
