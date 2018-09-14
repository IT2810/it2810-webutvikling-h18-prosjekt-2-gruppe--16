import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import DisplayTabs from "./components/DisplayTabs";
import MediaDisplayArea from "./components/MediaDisplayArea";

let media = {
    img: [
        {
            name: 'Light Cocktail lady',
            path: 'media/img/1.jpg'
        },
        {
            name: 'somethimg',
            path: "media/img/2.jpg"
        },
        {
            name: 'somethimg more',
            path: "media/img/3.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/4.jpg"
        }
    ],
    audio: [],
    text: [
        {
            name: 'Haiku 1',
            path: 'media/text/haiku/haiku1'
        },
        {
            name: 'Haiku 2',
            path: 'media/text/haiku/haiku2'
        },
        {
            name: 'Haiku 3',
            path: 'media/text/haiku/haiku3'
        },
        {
            name: 'Haiku 4',
            path: 'media/text/haiku/haiku4'
        }

    ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      media: media,
      imgVar: 0,
      textVar: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Art gallery</h1>
        <DisplayTabs
            showTab1={this.showTab1}
            showTab2={this.showTab2}
            showTab3={this.showTab3}
            showTab4={this.showTab4}
        />

        <MediaDisplayArea
            img={this.state.media.img[this.state.imgVar]}
            //audio={this.state.audio}
            text={this.state.media.text[this.state.textVar]}
        />

        <MediaCategory />
      </div>
    );
  }

    showTab1 = () => {
        console.log('tab 1 pressed');
        this.setState({imgVar: 0});
        this.setState({textVar: 0});
    };

    showTab2 = () => {
        console.log('tab 2 pressed');
        this.setState({imgVar: 1});
        this.setState({textVar: 1});

    };

    showTab3 = () => {
        console.log('tab 3 pressed');
        this.setState({imgVar: 2});
        this.setState({textVar: 2});

    };

    showTab4 = () => {
        console.log('tab 4 pressed');
        this.setState({imgVar: 3});
        this.setState({textVar: 3});

    };
}

export default App;
