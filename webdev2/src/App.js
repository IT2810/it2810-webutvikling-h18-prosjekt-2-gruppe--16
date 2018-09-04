import React, { Component } from 'react';
import './App.css';
import './components/MediaCategory';
import MediaCategory from "./components/MediaCategory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Art display</h1>
        <MediaCategory/>
      </div>
    );
  }
}

export default App;
