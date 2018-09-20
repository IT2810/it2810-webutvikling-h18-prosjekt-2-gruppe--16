import React, { Component } from "react";

class Audio extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         audio: null,
    //         path: "media/audio/" + props.type + "/" + props.number +".mp3"
    //     };
    // }

    // componentDidMount(){
    //     fetch(this.state.path)
    //         .then(response => response.text())
    //         .then(svg => document.body.insertAdjacentHTML("afterbegin", svg));
    // }

    render() {
        return (
            <div className="Audio">
                <audio controls>
                    <source src="media/audio/eccentric/eccentric1.mp3" type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Audio;
