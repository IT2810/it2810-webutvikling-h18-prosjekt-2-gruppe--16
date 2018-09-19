import React, { Component } from "react";
import Picture from "./Picture"
import Text from "./Text";

let hei=false;

class MediaDisplayArea extends Component {
    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html


    componentWillMount(){
        if(this.props.displayNumber === this.props.tabSelected){
            hei=true;
        } else {
            hei=false;
        }


    }

    componentWillUpdate(){
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
                    </p>
                    <Text type={this.props.text} number={this.props.displayNumber}/>
                     {this.props.img}
                        <Picture type={this.props.img} number={this.props.tabSelected}/>

                    </p>

                </div>
            );
        } else {
            return false
        }
    }


}

export default MediaDisplayArea;
