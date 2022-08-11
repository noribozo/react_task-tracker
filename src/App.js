import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Sept 4th 2.30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Teachers appointment',
      day: 'Sept 5th 5.30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Cinema',
      day: 'Sept 6th 6.30pm',
      reminder: false
    }
  ])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random * 10000) + 1
  const newTask = { id, ...task}
  setTasks([ ...tasks, newTask])
}

//Delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task,  reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> 
      ) : (
        'No Tasks To Show'
        )}
    
    </div>
  );
}

export default App;
