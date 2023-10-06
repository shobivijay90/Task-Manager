// TaskList.js
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleTask, deleteTask} from '../TaskActions'
import '../App.css'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id))
  }

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
