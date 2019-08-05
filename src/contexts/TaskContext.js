import React, { createContext, useState } from 'react'
import uuid from  'uuid/v1'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {content: 'Buy groceries', id:uuid()},
    {content: 'Hit the gym', id:uuid()}
  ])

  const addTask = (content) => {
    setTasks([...tasks, { content: content, id: uuid()}])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => {
      return (
        task.id !== id
      )}))
  }

  return (
    <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
    {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
