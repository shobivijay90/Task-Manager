import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import TaskForm from '../src/components/TaskForm'
import TaskList from '../src/components/TaskList'

function App() {
  return (
    <Provider store={store}>
    <div className="app">
    <h1>Task Manager</h1>
    <TaskForm />
    <TaskList />
  </div>
  </Provider>
  );
}

export default App;
