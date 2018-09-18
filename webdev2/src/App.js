import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import Tab from "./components/Tab";
import MediaDisplayArea from "./components/MediaDisplayArea";

let media = {
    img: [
        {
            name: 'Light Cocktail lady',
            path: 'media/img/nature/dam.jpeg'
        },
        {
            name: 'somethimg',
            path: "media/img/nature/kangaroo.jpeg"
        },
        {
            name: 'somethimg more',
            path: "media/img/nature/koala.jpeg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/nature/road.jpeg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/sosial/1.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/sosial/2.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/sosial/3.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/sosial/4.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/space/curiosity_descent.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/space/dual_booster_landing.jpeg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/space/mars_landing.jpg"
        },
        {
            name: 'somethimg morer',
            path: "media/img/space/starman.jpeg"
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

      selectedImgTheme: 'space',
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

        <MediaCategory
            imgTheme={this.state.selectedImgTheme}
            onImgRadioButtonClicked={this.handleImgThemeChange}
        />
      </div>
    );
  }

    handleImgThemeChange = (changeEvent) => {
        this.setState ({selectedImgTheme: changeEvent.target.value});
    };


    showTab1 = () => {
        if(this.state.selectedImgTheme === 'nature') {
            this.setState({imgVar: 0});
        }else if(this.state.selectedImgTheme === 'social') {
            this.setState({imgVar: 4})
        }else if(this.state.selectedImgTheme === 'space') {
            this.setState({imgVar: 8})
        }
    };

    showTab2 = () => {
        if(this.state.selectedImgTheme === 'nature') {
            this.setState({imgVar: 1});
        }else if(this.state.selectedImgTheme === 'social') {
            this.setState({imgVar: 5})
        }else if(this.state.selectedImgTheme === 'space') {
            this.setState({imgVar: 9})
        }
    };

    showTab3 = () => {
        if(this.state.selectedImgTheme === 'nature') {
            this.setState({imgVar: 2});
        }else if(this.state.selectedImgTheme === 'social') {
            this.setState({imgVar: 6})
        }else if(this.state.selectedImgTheme === 'space') {
            this.setState({imgVar: 10})
        }
    };

    showTab4 = () => {
        if(this.state.selectedImgTheme === 'nature') {
            this.setState({imgVar: 3});
        }else if(this.state.selectedImgTheme === 'social') {
            this.setState({imgVar: 7})
        }else if(this.state.selectedImgTheme === 'space') {
            this.setState({imgVar: 11})
        }
    };

    // showTab2 = () => {
    //     this.setState({imgVar: 1});
    //     this.setState({textVar: 1});
    //
    // };
    //
    // showTab3 = () => {
    //     this.setState({imgVar: 2});
    //     this.setState({textVar: 2});
    //
    // };
    //
    // showTab4 = () => {
    //     this.setState({imgVar: 3});
    //     this.setState({textVar: 3});
    //
    // };
}

export default App;