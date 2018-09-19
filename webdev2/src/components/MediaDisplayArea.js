import React, { Component } from "react";
import Picture from "./Picture"
import Text from "./Text";

let hei=true;

class MediaDisplayArea extends Component {
    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html


    componentWillMount(){

    }




    render() {
        if(hei) {
            return (
                <div className="MediaWrap">

                    <h2>Artwork</h2>
                    <p>
                        {this.props.displayNumber}
                        {this.props.textTheme}
                        {this.props.imgTheme}
                        {this.props.tabSelected}
                    </p>

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


}

export default MediaDisplayArea;
