import React, { Component } from "react";
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
                {/*picture*
                <Picture src={this.props} />
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

