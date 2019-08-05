import React, { useContext, useState } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import { ThemeContext } from '../contexts/ThemeContext'

const TaskList = () => {

  const { tasks, deleteTask, addTask } = useContext(TaskContext)
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(content)
    setContent('')
  }

/*  const removeTask = (id) => {
      deleteTask(id)
  } */

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;

  return (
      <div className="container">

        <div className="header">Tasker </div>
        <div className="fm-card" style={{background: theme.bg}}>
          <div className="task-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul className="task-ulist">
             {tasks.map(task => {
               return (
                 <div key={task.id} className="wrapper-li">
                 <li key={task.id} className="task-item" style={{background: theme.bg}}>{task.content}</li>
                 <span key={task.id} onClick= {() => deleteTask(task.id)} className="delete-btn">Delete</span>

                 </div>

               )
             })}
            </ul>
          </div>
          <form className="task-form" onSubmit={ handleSubmit }>
            <input  style={{background: theme.syntax, color: theme.bg}} className="content-input" type="text" placeholder="Do laundry"
             value={ content } onChange={ (e) => setContent(e.target.value)} />
            <input style={{background: theme.syntax, color: theme.bg}} className="submit-input" type="submit" value="Submit" />
          </form>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/voss-e"><i class="fa fa-github"></i> </a>
      </div>
  )
}

export default TaskList
