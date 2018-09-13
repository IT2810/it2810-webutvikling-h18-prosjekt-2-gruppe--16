import React, {Component} from "react";

class Picture extends React.Component {
  render (){
    let classname = "picture";
    return(
    <img class={classname} src={this.props.src} alt={this.props.src}/>);
  }
}

export default Picture;
