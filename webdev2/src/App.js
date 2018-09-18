import React, { Component } from "react";
import "./App.css";
import MediaCategory from "./components/MediaCategory";
import Tab from "./components/Tab";
import MediaDisplayArea from "./components/MediaDisplayArea";

let media = {
    img: [
        {
            name: 'A dam',
            path: 'media/img/nature/dam.jpeg'
        },
        {
            name: 'This is Brodey',
            path: "media/img/nature/kangaroo.jpeg"
        },
        {
            name: 'Hi!',
            path: "media/img/nature/koala.jpeg"
        },
        {
            name: 'Stripes of road',
            path: "media/img/nature/road.jpeg"
        },
        {
            name: 'Light Cocktail lady',
            path: "media/img/sosial/1.jpg"
        },
        {
            name: 'Friends',
            path: "media/img/sosial/2.jpg"
        },
        {
            name: 'Leader pic',
            path: "media/img/sosial/3.jpg"
        },
        {
            name: 'Not leader pic',
            path: "media/img/sosial/4.jpg"
        },
        {
            name: 'Landing sequence',
            path: "media/img/space/curiosity_descent.jpg"
        },
        {
            name: 'Dual landing',
            path: "media/img/space/dual_booster_landing.jpeg"
        },
        {
            name: 'Artist colony setup',
            path: "media/img/space/mars_landing.jpg"
        },
        {
            name: 'Starman & Earth',
            path: "media/img/space/starman.jpeg"
        }
    ],
    audio: [
        {
            path: 'media/audio/chants/bazoon.mp3'
        },
        {
            path: 'media/audio/chants/chant.mp3'
        },
        {
            path: 'media/audio/chants/fotball.mp3'
        },
        {
            path: 'media/audio/chants/munk.mp3'
        },
        {
            path: 'media/audio/eccentric/atmospheric_noises.mp3'
        },
        {
            path: 'media/audio/eccentric/bass_drums.mp3'
        },
        {
            path: 'media/audio/eccentric/random.mp3'
        },
        {
            path: 'media/audio/eccentric/swingy_strings.mp3'
        },
        {
            path: 'media/audio/musical/anthem.mp3'
        },
        {
            path: 'media/audio/musical/beat.mp3'
        },
        {
            path: 'media/audio/musical/beat2.mp3'
        },
        {
            path: 'media/audio/musical/harmonic_guitar.mp3'
        }
    ],
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
        },
        {
            name: 'Poem 1',
            path: 'media/text/poem/poem1'
        },
        {
            name: 'Poem 2',
            path: 'media/text/poem/poem2'
        },
        {
            name: 'Poem 3',
            path: 'media/text/poem/poem3'
        },
        {
            name: 'Poem 4',
            path: 'media/text/poem/poem4'
        },
        {
            name: 'Songtext 1',
            path: 'media/text/songtext/songtext1'
        },
        {
            name: 'songtext 2',
            path: 'media/text/songtext/songtext2'
        },
        {
            name: 'songtext 3',
            path: 'media/text/songtext/songtext3'
        },
        {
            name: 'songtext 4',
            path: 'media/text/songtext/songtext4'
        }

    ]
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      media: media,

      imgVar: 0,
      audioVar: 0,
      textVar: 0,

      selectedImgTheme: 'nature',
      selectedAudioTheme: 'chants',
      selectedTextTheme: 'haiku',
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
            audio={this.state.media.audio[this.state.audioVar]}
            text={this.state.media.text[this.state.textVar]}
        />

        <MediaCategory
            imgTheme={this.state.selectedImgTheme}
            onImgRadioButtonClicked={this.handleImgThemeChange}

            audioTheme={this.state.selectedAudioTheme}
            onAudioRadioButtonClicked={this.handleAudioThemeChange}

            textTheme={this.state.selectedTextTheme}
            onTextRadioButtonClicked={this.handleTextThemeChange}
        />
      </div>
    );
  }

    handleImgThemeChange = (changeEvent) => {
        this.setState ({selectedImgTheme: changeEvent.target.value});
    };

    handleAudioThemeChange = (changeEvent) => {
        this.setState ({selectedAudioTheme: changeEvent.target.value});
    };

    handleTextThemeChange = (changeEvent) => {
        this.setState ({selectedTextTheme: changeEvent.target.value});
    };


    showTab1 = () => {
        if(this.state.selectedImgTheme === 'nature') {
            this.setState({imgVar: 0});
        }else if(this.state.selectedImgTheme === 'social') {
            this.setState({imgVar: 4})
        }else if(this.state.selectedImgTheme === 'space') {
            this.setState({imgVar: 8})
        }

        if(this.state.selectedAudioTheme === 'chants') {
            this.setState({audioVar: 0});
        }else if(this.state.selectedAudioTheme === 'eccentric') {
            this.setState({audioVar: 4})
        }else if(this.state.selectedAudioTheme === 'musical') {
            this.setState({audioVar: 8})
        }

        if(this.state.selectedTextTheme === 'haiku') {
            this.setState({textVar: 0});
        }else if(this.state.selectedTextTheme === 'poem') {
            this.setState({textVar: 4})
        }else if(this.state.selectedTextTheme === 'songtext') {
            this.setState({textVar: 8})
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

        if(this.state.selectedAudioTheme === 'chants') {
            this.setState({audioVar: 1});
        }else if(this.state.selectedAudioTheme === 'eccentric') {
            this.setState({audioVar: 5})
        }else if(this.state.selectedAudioTheme === 'musical') {
            this.setState({audioVar: 9})
        }

        if(this.state.selectedTextTheme === 'haiku') {
            this.setState({textVar: 1});
        }else if(this.state.selectedTextTheme === 'poem') {
            this.setState({textVar: 5})
        }else if(this.state.selectedTextTheme === 'songtext') {
            this.setState({textVar: 9})
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

        if(this.state.selectedAudioTheme === 'chants') {
            this.setState({audioVar: 2});
        }else if(this.state.selectedAudioTheme === 'eccentric') {
            this.setState({audioVar: 6})
        }else if(this.state.selectedAudioTheme === 'musical') {
            this.setState({audioVar: 10})
        }

        if(this.state.selectedTextTheme === 'haiku') {
            this.setState({textVar: 2});
        }else if(this.state.selectedTextTheme === 'poem') {
            this.setState({textVar: 6})
        }else if(this.state.selectedTextTheme === 'songtext') {
            this.setState({textVar: 10})
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

        if(this.state.selectedAudioTheme === 'chants') {
            this.setState({audioVar: 3});
        }else if(this.state.selectedAudioTheme === 'eccentric') {
            this.setState({audioVar: 7})
        }else if(this.state.selectedAudioTheme === 'musical') {
            this.setState({audioVar: 11})
        }

        if(this.state.selectedTextTheme === 'haiku') {
            this.setState({textVar: 3});
        }else if(this.state.selectedTextTheme === 'poem') {
            this.setState({textVar: 7})
        }else if(this.state.selectedTextTheme === 'songtext') {
            this.setState({textVar: 11})
        }
    };


}

export default App;