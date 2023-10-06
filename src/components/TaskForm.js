// TaskForm.js
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../TaskActions'
import '../App.css'

const TaskForm = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task))
      setTask('')
    }
  }

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskForm
