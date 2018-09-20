import React, { Component } from "react";

class Audio extends Component {
    constructor(props){
        super(props);
        this.state = {
            path: "media/audio/" + props.type + "/" + props.type + props.number +".mp3"
        };
    }

    render() {
        return (
            <div className="Audio">
                <audio controls autoPlay loop>
                    <source src={this.state.path} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Audio;
