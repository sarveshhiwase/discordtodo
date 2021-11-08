import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import InputModal from "./Components/InputModal";
import Modal from "./Components/Modal";
import Task from "./Components/Task";

function App() {
  const [addTask, setAddTask] = useState(false);
  const [show,setShow] = useState(false);
  const [usertasks, setUsertasks] = useState([]);

  const showInputModal = () => {
    setAddTask(true);
  };

  const showModal = () => {
    setShow(true);
  }

  const closeInputModal = () => {
    setAddTask(false);
  };

  const closeModal = () => {
    setShow(false);
  };

  const getLocalStorageData = () => {
    const data = localStorage.getItem("tasks");
    if (data) {
      const tasks = JSON.parse(data);
      return tasks;
    }
    return null;
  };

  const getJSONformatdata = (data) => {
    return JSON.stringify(data);
  };

  useEffect(() => {
    const tasks = getLocalStorageData();
    if (tasks !== null) {
      setUsertasks(tasks);
    }
  }, []);

  const createTask = (title, description, state) => {
    const task = {
      title,
      description,
      state,
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
      if (usertasks[i].created === id) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      const tasks = [...usertasks];
      tasks.splice(index, 1);
      localStorage.setItem("tasks", getJSONformatdata(tasks));
      setUsertasks(tasks);
    }
  };

  return (
   <>
    <Navbar showInputModal={showInputModal} showModal={showModal}/>
    <div className="h-screen dark:bg-gray-700 bg-white">
      {addTask && (
        <InputModal closeModal={closeInputModal} createTask={createTask} />
      )}
      {show && (
        <Modal closeModal={closeModal} />
      )}
      <div className="w-3/5 p-4 mx-auto">
        {usertasks &&
          usertasks.map((task) => (
            <Task
              title={task.title}
              description={task.description}
              key={task.created}
              created={task.created}
              deleteTask={deleteTask}
              state={task.state}
            />
          ))}
      </div>
    </div>
  </>
  );
}

export default App;
