import React from 'react';
import './App.css';
import { ClockManager } from './components/ClockManager';
import { Pane } from 'evergreen-ui'

function App() {
  
  return (
    <div className="App">
      <Pane
        display="flex" 
        alignItems="center"
        justifyContent="center"
        background="#D4EEE2"
      >
        <ClockManager />
      </Pane>
    </div>
  );
}

export default App;
