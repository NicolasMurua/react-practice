import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "Task One",
  //     day: "Feb 5th at 2:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Task Two",
  //     day: "Feb 6th at 2:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Task Three",
  //     day: "Feb 7th at 2:30pm",
  //     reminder: false,
  //   },
  // ]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksApi = await fetchTasks();
      setTasks(tasksApi);
    };
    getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const data1 = data.filter((data) => data.userId === 1);
    console.log(data1);
    return data1;
  };
  // const showAddTaskToggle = () => {
  //   setShowAddTask(!showAddTask)
  // }
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      id: id,
      title: task.text,
      day: task.day,
      reminder: task.reminder,
    };
    setTasks([...tasks, newTask]);
  };
  //Delete task
  const deleteTask = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        showAddTask={showAddTask}
        tittle="Task Tracker"
        onClick={() => setShowAddTask(!showAddTask)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks"
              )}
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
