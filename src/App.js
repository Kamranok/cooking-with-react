import React, { useState } from 'react'
import './App.css';
import CounterHooks from './components/CounterHook'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('lightblue')
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        <div className="App">
          <CounterHooks initialCount={0} />
          <div>
            <button onClick={() => setTheme(prevTheme => {
              return prevTheme === 'lightblue' ? 'pink' : 'lightblue'
            })}>Toggle Theme</button>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
