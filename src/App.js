import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import InputModal from "./Components/InputModal";
import Task from "./Components/Task";

function App() {
  const [addTask, setAddTask] = useState(false);
  const [usertasks, setUsertasks] = useState([]);

  const showModal = () => {
    setAddTask(true);
  };

  const closeModal = () => {
    setAddTask(false);
  };

  const getLocalStorageData = () => {
    const data = localStorage.getItem("tasks");
    if(data){
      const tasks = JSON.parse(data);
      return tasks;
    }
    return null;
  }

  const getJSONformatdata = (data) => {
    return JSON.stringify(data);
  }

  useEffect(() => {
    const tasks = getLocalStorageData();
    if (tasks !== null) {
      setUsertasks(tasks);
    }
  }, []);

  const createTask = (title, description) => {
    const task = {
      title,
      description,
      created: Date.now(),
    };
    if (usertasks) {
      const tp = getJSONformatdata([...usertasks, task]);
      localStorage.setItem("tasks", tp);
      setUsertasks([...usertasks, task]);
    } else {
      const tp = getJSONformatdata([task]);
      localStorage.setItem("tasks", tp);
      setUsertasks([task]);
    }
  };


  const deleteTask = (id) => {
    let index = -1;
    for (let i = 0; i < usertasks.length; i++) {
        if(usertasks[i].created === id){
          index = i;
          break;
        }
    }
    if (index > -1) {
      const tasks = [...usertasks];
      tasks.splice(index, 1)
      localStorage.setItem("tasks",  getJSONformatdata(tasks));
      setUsertasks(tasks);
    }

  }

  return (
    <div className="min-h-screen bg-[#1C2128]">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <button
          className="btn my-4 bg-blue-600 hover:bg-blue-700 rounded-lg"
          onClick={showModal}
        >
          +
        </button>
      </div>
      {addTask && (
        <InputModal closeModal={closeModal} createTask={createTask} />
      )}
      <div className="w-3/5 m-auto">
        {usertasks &&
          usertasks.map((task) => (
            <Task
              title={task.title}
              description={task.description}
              key={task.created}
              created={task.created}
              deleteTask={deleteTask}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
