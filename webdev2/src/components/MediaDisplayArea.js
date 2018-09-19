import React, { Component } from "react";
import Text from "./Text";

let hei=true;

class MediaDisplayArea extends Component {
    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html


    componentWillMount(){
        console.log(this.props.textTheme);
        console.log(this.props.displayNumber);
        console.log(this.props.tabSelected);

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

