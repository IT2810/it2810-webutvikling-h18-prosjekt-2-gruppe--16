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
                    <p>This is the loaded tab: {this.props.displayNumber}</p>
                    <p>This is the state true false state for the tab loaded: {this.state.isEqual.toString()}</p>
                    <p>This is the selected tab: {this.props.tabSelected}</p>
                    <Text type={this.props.text} number={this.props.displayNumber}/>
                    <Picture type={this.props.img} number={this.props.displayNumber}/>
                    <Audio type={this.props.audioTheme} number={this.props.displayNumber}/>

                </div>
            );
        } else {
            return false
        }
    }
}

export default MediaDisplayArea;
