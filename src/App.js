import React, { Component } from 'react';
import './App.css';
// import List from './movie-by-state/list.js'; // 使用传统的state
import List from './movie-by-suspense/list.js'; // 使用 suspense

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
