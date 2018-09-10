import React, {Component} from "react";

class Picture extends React.Component {
  render (){
    return(
    <img src={this.props.src} alt={this.props.src}/>);
  }
}

export default Picture;
