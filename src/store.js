// store.js
import {createStore} from 'redux'
import taskReducer from './TaskReducer'

const store = createStore(taskReducer)

export default store
