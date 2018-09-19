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
        audioTheme: null,
        textTheme: "haiku",
        tabSelected: null
    };
  }


  render() {
    return (
      <div className="App">
        <h1>Art gallery </h1>
        <div className="DisplayTabs">
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 1'} value={1}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 2'} value={2}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 3'} value={3}/>
            <Tab changeTab={this.onChangeTab.bind(this)} tabTitle={'TAB 4'} value={4}/>
        </div>
          <MediaDisplayArea
              displayNumber={1}
              img={this.state.imgTheme}
              audio={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />
          <MediaDisplayArea
              displayNumber={2}
              img={this.state.imgTheme}
              audio={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />
          <MediaDisplayArea
              displayNumber={3}
              img={this.state.imgTheme}
              audio={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />
          <MediaDisplayArea
              displayNumber={4}
              img={this.state.imgTheme}
              audio={this.state.audioTheme}
              text={this.state.textTheme}
              tabSelected={this.state.tabSelected}
          />

        <MediaCategory
            imgTheme={this.state.imgTheme}
            onImgRadioButtonClicked={this.handleImgThemeChange}

            audioTheme={this.state.audioTheme}
            onAudioRadioButtonClicked={this.handleAudioThemeChange}

            textTheme={this.state.textTheme}
            onTextRadioButtonClicked={this.handleTextThemeChange}
        />
      </div>
    );
  }

    handleImgThemeChange = (changeEvent) => {
        this.setState ({imgTheme: changeEvent.target.value});
    };

    handleAudioThemeChange = (changeEvent) => {
        this.setState ({audioTheme: changeEvent.target.value});
    };

    handleTextThemeChange = (changeEvent) => {
        this.setState ({textTheme: changeEvent.target.value});
    };

    onChangeTab(newTab){
      this.setState({
        tabSelected: newTab
      })
    }


}

export default App;
