import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import Tab from "./components/Tab";
import MediaDisplayArea from "./components/MediaDisplayArea";

class App extends Component {

  //the state of app contains the selected categories and the active display
  constructor() {
    super();
    this.state = {
        imgTheme: null,
        audioTheme: null,
        textTheme: null,
        tabSelected: 1
    };
  }


  //we pass down all nessecary props to there components
  //tab sends down a callback function, a tittle and the number of the tab (value). the number of the tab is extracted in the callback functions below and placed in the app state, when the tab is clicked
  //mediaDisplayArea is where the media is displayed it contains a picture, a text and a sound
  //mediaCategory where the selections happens

  render() {
    return (
      <div className="App">
        <h1>Art gallery</h1>
        <div className="DisplayTabs">
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'Display 1'} value={1}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'Display 2'} value={2}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'Display 3'} value={3}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'Display 4'} value={4}/>
        </div>
          <MediaDisplayArea
              displayNumber={1}
              img={this.state.imgTheme}
              audioTheme={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />
          <MediaDisplayArea
              displayNumber={2}
              img={this.state.imgTheme}
              audioTheme={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />
          <MediaDisplayArea
              displayNumber={3}
              img={this.state.imgTheme}
              audioTheme={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />
          <MediaDisplayArea
              displayNumber={4}
              img={this.state.imgTheme}
              audioTheme={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />

        <MediaCategory
            imgTheme={this.state.imgTheme}
            changeImgTheme={this.onChangeImgTheme.bind(this)}

            audioTheme={this.state.audioTheme}
            changeAudioTheme={this.onChangeAudioTheme.bind(this)}

            textTheme={this.state.textTheme}
            changeTextTheme={this.onChangeTextTheme.bind(this)}
        />
      </div>
    );
  }

    //here is the callback functions passed down in MediaCategory, when the selection changes the state in app.js changes
    onChangeImgTheme = (changeEvent) => {
        this.setState ({imgTheme: changeEvent.target.value});
    };

    onChangeAudioTheme = (changeEvent) => {
        this.setState ({audioTheme: changeEvent.target.value});
    };

    onChangeTextTheme = (changeEvent) => {
        this.setState ({textTheme: changeEvent.target.value});
    };

    //here is the callback functions passed down in Tab, when a new tab is active the state in app.js changes
    onChangeTab(newTab){
      this.setState({
        tabSelected: newTab
      });
    }


}

export default App;
