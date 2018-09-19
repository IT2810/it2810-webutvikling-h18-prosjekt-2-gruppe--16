import React, { Component } from "react";
import Picture from "./Picture"
import Text from "./Text";

let hei=false;

class MediaDisplayArea extends Component {
    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html


    componentWillMount(){
        console.log(this.props.textTheme);
        console.log('dN willMount '+this.props.displayNumber);
        console.log('tabS willMount '+this.props.tabSelected);
        if(this.props.displayNumber === this.props.tabSelected){
            hei=true;
        } else {
            hei=false;
        }

    }

    componentWillUpdate(){
        console.log('dN willupdata '+this.props.displayNumber);
        console.log('tabSelected willupdate '+this.props.tabSelected);
        if(this.props.displayNumber === this.props.tabSelected){
            hei=true;
        } else {
            hei=false;
        }
    }



    render() {
        if(hei) {
            return (
                <div className="MediaWrap">

                    <h2>Artwork</h2>
                    <p>
                        {this.props.displayNumber}
                        {this.props.tabSelected}
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
        } else {
            return false
        }
    }


}

export default MediaDisplayArea;
