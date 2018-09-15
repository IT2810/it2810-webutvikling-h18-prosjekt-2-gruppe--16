import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import Tab from "./components/Tab";
import MediaDisplayArea from "./components/MediaDisplayArea";

let media = {
    img: [
        {
            name: 'Light Cocktail lady',
            path: 'media/img/sosial/1.jpg'
        },
        {
            name: 'somethimg',
            path: "media/img/sosial/2.jpg"
        },
        {
            name: 'somethimg more',
            path: "media/img/sosial/3.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/sosial/4.jpg"
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
        <div className="DisplayTabs">
            <Tab tabToRender={this.showTab1} tabTitle={'TAB 1'} />
            <Tab tabToRender={this.showTab2} tabTitle={'TAB 2'} />
            <Tab tabToRender={this.showTab3} tabTitle={'TAB 3'} />
            <Tab tabToRender={this.showTab4} tabTitle={'TAB 4'} />
        </div>

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
        this.setState({imgVar: 0});
        this.setState({textVar: 0});
    };

    showTab2 = () => {
        this.setState({imgVar: 1});
        this.setState({textVar: 1});

    };

    showTab3 = () => {
        this.setState({imgVar: 2});
        this.setState({textVar: 2});

    };

    showTab4 = () => {
        this.setState({imgVar: 3});
        this.setState({textVar: 3});

    };
}

export default App;