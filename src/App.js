import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {

    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState(
        [
        ]);

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task};
        setTasks([...tasks, newTask]);
    }

  return (
    <div className="container">
        <Header
            title={'Task Tracker'}
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        <Tasks
            tasks={tasks}
            onToggle={toggleReminder}
            onDelete={deleteTask}
        />
    </div>
  );
}

export default App;
