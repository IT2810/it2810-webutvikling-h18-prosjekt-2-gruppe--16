import React, { Component } from "react";
import Picture from "./Picture"
import Text from "./Text";

class MediaDisplayArea extends Component {


    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html

    componentWillMount(){
        console.log(this.props.textTheme);
    }

    render() {
        return (
            <div className="MediaWrap">

                <h2>Artwork</h2>
                <p>{this.props.displayNumber}</p>
                <Picture type={this.props.img}  number={this.props.displayNumber} />
                {/*text*
                <Text type={"haiku"} number={1}/>

                {/*Audio*
                <audio controls loop>
                    <source src={this.props.audio.path} type="audio/mpeg" />
                </audio>
                */}

            </div>
        );
    }



}

export default MediaDisplayArea;
