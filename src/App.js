// https://www.youtube.com/watch?v=w7ejDZ8SWv8
// import logo from './logo.svg';
// import './App.css';
/*
// Class based Component
import React from 'react'

class App extends React.Component {
  render()  {
    return <h1>Hello from Class Component</h1>
  }
}
*/

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import About from "./components/About"



function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const name = "Chomu";

  const [tasks, setTasks] = useState([]) // using with json-webserver (db.json as hosted DB)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // console.log(data)
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    // console.log(data)
    return data
  }

  /*const [tasks, setTasks] = useState([
    // Default initial value of state
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Jan 1st at 00:00AM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting my Crush",
      day: "Feb 14th at 04:20PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  */

  /* Note: Don't directly Set/update the value of State varibles as 
    - State's are meant to be immutable
    https://medium.com/javascript-in-plain-english/why-react-and-redux-need-immutable-data-dae3ab3611a0
    - they are recreated everytime and sent down
    - One way data flow

    So to make any changes in to state, use setState hook(here- setTasks)
    */

  // Add Task
  const addTask = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks/`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

    const data = await res.json()
    setTasks([...tasks, data]) // [old tasks + New Task]

    //----------------------------------------
    console.log(task);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
    //  // [old tasks + New Task]
  }


  // Delete Task

  const deleteTask = async (id) => {
    // Sending a Delete request to DB
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE',
      })

    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // Getting the task first (fetching)
    const taskToToggle = await fetchTask(id)
    // Creating a New Object with Updated Reminder status
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

    const data = await res.json()

    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: data.reminder } : task))
  }


  // -------------------------------------------------
  return (
    <Router>

      <div className='container'>
        {/* <h1 style = {{color : 'red',backgroundColor : 'black' }}>Hello {name} from React Developer</h1> */}

        <h1 style={headingStyle}>Hello {name} Developer from React</h1>

        <Header
          title='Task Tracker'
          onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
        />
        {/* Above setShowAddTask is used to Toggle Form visibility by clicking Add button */}


        <Route path='/' exact render={(props) => (
          <>
            {showAddTask &&
              <AddTask
                onAdd={addTask} />}
            {/* Short trick method to use if-else by using ternary without if else  */}

            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show :D'}

          </>
        )} />

        <Route path='/about' component={About} />

        <Footer />

      </div>

    </Router >
    // To use Routes, we have to Wrap everything under <Router>
  )
}


// CSS styling in React in jS
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default App;
