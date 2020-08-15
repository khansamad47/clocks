import React from 'react';
import './App.css';
import { ClockManager } from './components/ClockManager';
import { Pane } from 'evergreen-ui'

function App() {
  
  return (
      <div className="App" style = { {height:"100vh"}} >
      <Pane
        display="flex" 
        alignItems="flex-start"
        justifyContent="center"
        background="#47B881"
        width="100%"
        height="100%"
      >
        <ClockManager />
      </Pane>
      </div>
  );
}

export default App;
