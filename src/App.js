import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import InputModal from "./Components/InputModal";
import Modal from "./Components/Modal";
import Task from "./Components/Task";

function App() {
  const [addTask, setAddTask] = useState(false);
  const [show, setShow] = useState(false);
  const [usertasks, setUsertasks] = useState([]);
  const [color, setColor] = useState("");

  const showInputModal = () => {
    setAddTask(true);
  };

  const showModal = () => {
    setShow(true);
  };

  const closeInputModal = () => {
    setAddTask(false);
  };

  const closeModal = () => {
    setShow(false);
  };

  const storeUserColor = (value) => {
    localStorage.setItem("user-color", value);
    setColor(value);
  };

  const getLocalStorageData = (key) => {
    const data = localStorage.getItem(key);
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
    const tasks = getLocalStorageData("tasks");
    const usercolor = localStorage.getItem("user-color");

    if (tasks !== null) {
      setUsertasks(tasks);
    }
    if (usercolor) {
      setColor(usercolor);
    } else {
      setColor("blue");
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
      <Navbar
        showInputModal={showInputModal}
        showModal={showModal}
        color={color}
      />
      <div className="min-h-screen pl-0 pt-16 sm:pt-0 sm:pl-16 dark:bg-gray-700 bg-[#f0f8ff]">
        {addTask && (
          <InputModal closeModal={closeInputModal} createTask={createTask} />
        )}
        {show && (
          <Modal
            closeModal={closeModal}
            setColor={storeUserColor}
            color={color}
          />
        )}
        <div className="w-full sm:w-3/5 p-4 mx-auto">
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
