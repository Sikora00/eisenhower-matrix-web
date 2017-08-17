import React, { Component } from 'react';
import './assets/styles/styles.css';
import TasksMatrix from "./components/TasksMatrix";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid">
            <header>
                <h2>The Eisenhover Matrix</h2>
            </header>
            <div className="App-content">
                <TasksMatrix />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
