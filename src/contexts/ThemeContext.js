import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#2c2c2e',
      ui: '#fff',
      bg: '#e5e5ea',
      delBtn: '#ff3b30'
    },
    dark: {
      syntax: '#e5e5ea',
      ui: '#333',
      bg: '#2c2c2e',
      delBtn: '#ffcc00'

    }
  }

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    })
  }

  render () {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
