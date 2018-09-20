import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import Tab from "./components/Tab";
import MediaDisplayArea from "./components/MediaDisplayArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
        imgTheme: "circle",
        audioTheme: "chants",
        textTheme: "haiku",
        tabSelected: 3
    };
  }

    //lifecycle lags behind with tabSelected

  render() {
    return (
      <div className="App">
        <h1>Art gallery</h1>
        <div className="DisplayTabs">
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 1'} tabNumber={1}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 2'} tabNumber={2}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 3'} tabNumber={3}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 4'} tabNumber={4}/>
        </div>

        <MediaDisplayArea
            tabSelected={this.state.tabSelected}
            imgTheme={this.state.imgTheme}
            audioTheme={this.state.audioTheme}
            textTheme={this.state.textTheme}
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

    onChangeImgTheme = (changeEvent) => {
        this.setState ({imgTheme: changeEvent.target.value});
    };

    onChangeAudioTheme = (changeEvent) => {
        this.setState ({audioTheme: changeEvent.target.value});
    };

    onChangeTextTheme = (changeEvent) => {
        this.setState ({textTheme: changeEvent.target.value});
    };

    onChangeTab(newTab){
        this.setState({
        tabSelected: newTab
        });
    }
}

export default App;
