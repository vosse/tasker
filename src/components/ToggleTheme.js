import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ToggleTheme = () => {

  const { toggleTheme } = useContext(ThemeContext)

  return (
    <div className="kita">
      <input  className="input-ios" onClick={ toggleTheme } type="checkbox" id="ios"/>
      <label className="label-ios" htmlFor="ios"><i className="i-ios"></i></label>
    </div>
  )
}

export default ToggleTheme
