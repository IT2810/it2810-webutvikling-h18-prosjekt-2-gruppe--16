import React, { Component } from "react";

class Picture extends Component {
    constructor(props){
        super(props);
        this.state = {
            svg: null,
            path: "media/picture/" + props.type + "/" + props.number +".svg"
        };
    }

    componentDidMount(){
        fetch(this.state.path)
          .then(response => response.text())
          .then(response => this.setState({svg:response}))
        }


    render() {
        return (
            <div className="Picture" dangerouslySetInnerHTML={{__html:this.state.svg}}/>
        );
    }
}

export default Picture;
