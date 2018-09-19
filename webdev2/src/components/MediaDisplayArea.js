import React, { Component } from "react";
import Picture from "./Picture"
import Text from "./Text";

class MediaDisplayArea extends Component {
    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html
    constructor(props){
        super();
        this.state ={
            isEqual:false
        }
    }
    
    componentWillReceiveProps(){
        if(this.props.displayNumber === this.props.tabSelected){
            this.setState({isEqual:true})
        } else {
            this.setState({isEqual:false})
        }
        console.log('state ' + this.state.isEqual);
    }



    render() {
        if(this.state.isEqual) {
            return (
                <div className="MediaWrap">

                    <h2>Artwork</h2>
                    <p>
                        {this.props.displayNumber}
                        {this.props.tabSelected}
                    <Text type={this.props.text} number={this.props.displayNumber}/>

                    </p>

                </div>
            );
        } else {
            return false
        }
    }


}

export default MediaDisplayArea;
