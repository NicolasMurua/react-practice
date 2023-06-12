import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task One",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      title: "Task Two",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      title: "Task Three",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);
  //Add Task
  
  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  return (
  <div className="container">
    <Header tittle='Task Tracker'/>
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    <AddTask/>
  </div>
  )
}

export default App;
