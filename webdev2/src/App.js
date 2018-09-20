import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import Tab from "./components/Tab";
import MediaDisplayArea from "./components/MediaDisplayArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
        imgTheme: null,
        audioTheme: "chants",
        textTheme: "haiku",
        tabSelected: 1
    };
  }

    //lifecycle lags behind with tabSelected

  render() {
    return (
      <div className="App">
        <h1>Art gallery {this.state.textTheme} {this.state.audioTheme} {this.state.imgTheme}</h1>
        <div className="DisplayTabs">
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 1'} value={1}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 2'} value={2}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 3'} value={3}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 4'} value={4}/>
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
      })
      console.log('app.js ' + this.state.tabSelected);
    }


}

export default App;
