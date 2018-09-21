import React, { Component } from "react";
import Picture from "./Picture"
import Audio from "./Audio"
import Text from "./Text";

class MediaDisplayArea extends Component {
    constructor(props){
        super();
        this.state ={
            isEqual:false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.displayNumber === props.tabSelected) {
            return{
                isEqual:true
            };
        } else {
            return{
                isEqual:false
            };
        }
    }

    render() {
        if(this.state.isEqual) {
            return (
                <div className="MediaWrap">
                    <h2>Artwork</h2>
                    <Text className="Text" type={this.props.text} number={this.props.displayNumber}/>
                    <Audio className="Audio" type={this.props.audioTheme} number={this.props.displayNumber}/>
                    <Picture className="Picture" type={this.props.img} number={this.props.displayNumber}/>
                </div>
            );
        } else {
            return false
        }
    }
}

export default MediaDisplayArea;
