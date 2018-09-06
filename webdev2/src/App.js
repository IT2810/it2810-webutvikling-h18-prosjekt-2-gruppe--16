import React, { Component } from 'react';
import './App.css';
import './components/MediaCategory';
import MediaCategory from "./components/MediaCategory";
import MediaSelect from "./components/MediaSelect";
import MediaWrap from "./components/MediaWrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Art display</h1>
        <MediaSelect/>
        <MediaWrap/>
        <MediaCategory/>
      </div>
    );
  }
}

export default App;
