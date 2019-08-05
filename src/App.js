import React from 'react';
import TaskList from './components/TaskList'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './contexts/ThemeContext'
import TaskContextProvider from './contexts/TaskContext'

function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
        <TaskContextProvider>
          <TaskList />
          <ToggleTheme />
        </TaskContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
