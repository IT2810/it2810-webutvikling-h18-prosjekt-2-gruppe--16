import React, { Component } from "react";
import Picture from "./Picture"
import Audio from "./Audio"
import Text from "./Text";

class MediaDisplayArea extends Component {

    render() {
        return (
            <div className="MediaWrap">

                <h2>Artwork</h2>
                <p>
                    tabSelected: {this.props.tabSelected} <br/>
                    textTheme: {this.props.textTheme}<br/>
                    imgTheme: {this.props.imgTheme}<br/>
                    audioTheme: {this.props.audioTheme}
                </p>

                {/*Alt annet (over) oppdateres, men av en eller anne grunn, blir ikke media (under) oppdatert...*/}
                <Text type={this.props.textTheme} number={this.props.tabSelected}/>
                <Picture type={this.props.imgTheme} number={this.props.tabSelected}/>
                <Audio type={this.props.audioTheme} number={this.props.tabSelected}/>

            </div>
        );
    }
}

export default MediaDisplayArea;
