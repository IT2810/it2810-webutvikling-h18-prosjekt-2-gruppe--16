import React, { Component } from "react";
import Picture from "./Picture";

class MediaDisplayArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parsedText: '',
            path: this.props.text.path
        };
    }

    componentDidUpdate() {
        fetch(this.props.text.path)
            .then(r => r.text()) //this code line need to 'write' lines into the variable
            //we need to parse the text into lines
            .then(text => this.setState({ parsedText: text }));
    }

    render() {
        return (
            <div className="MediaWrap">

                <h2>Artwork: {this.props.img.name}</h2>
                <Picture src={this.props.img.path} />
                <p>{this.state.parsedText}</p>

            </div>
        );
    }



}

export default MediaDisplayArea;

