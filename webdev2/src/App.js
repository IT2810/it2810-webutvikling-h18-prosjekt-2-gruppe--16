import React, { Component } from 'react';
import './App.css';
import './components/MediaCategory';
import MediaCategory from "./components/MediaCategory";
import MediaSelect from "./components/MediaSelect";
import MediaWrap from "./components/MediaWrap";


const mediaData = {
    img: [
        {
            name: "somepic",
            path: "./media/img/somepic.jpg"
        }
    ],
    audio: [
        {
            // id: 1,
            name: "chant",
            path: "./media/audio/chant.mp3"
        }
    ]
};

const hei = {hallo: "hei"};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            media: mediaData,
        };
    }
  render() {
    return (
      <div className="App">
        <h1>Art display</h1>
        <MediaSelect/>
        <MediaWrap/>
        <MediaCategory/>

          { console.log(this.state.media.img) }

          {/*<Renderpic picture={ this.state.media.img[0].name } /> this breakes the code, why is this on master?*/}


      </div>
    );
  }
}

export default App;