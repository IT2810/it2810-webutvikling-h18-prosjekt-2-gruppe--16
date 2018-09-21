import React, { Component } from "react";

class Audio extends Component {
    constructor(props){
        super(props);
        this.state = {
            path: "media/audio/" + props.type + "/" + props.type + props.number +".mp3"
        };
    }

    //This ensures that the state is updated when the props changes. And thus the componentDidUpdate is activated.
    static getDerivedStateFromProps(props, state) {
        return{
            path: "media/audio/" + props.type + "/" + props.type + props.number +".mp3"
        };
    }

    render() {
        return (
            <div>
                <audio controls loop key={this.state.path}>
                    <source src={this.state.path} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Audio;
