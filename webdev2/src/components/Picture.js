import React, { Component } from "react";

class Picture extends Component {
    constructor(props){
        super(props);
        this.state = {
            svg: null,
            path: "media/picture/" + props.type + "/" + props.number +".svg"  //type= haiku/poem/songtext number=1-4 //use this to make text array https://delim.co/#
        };
    }

    componentDidMount(){
        fetch(this.state.path)
          .then(response => response.text())
          .then(svg => document.body.insertAdjacentHTML("afterbegin", svg));
        }

    render() {
        return (
            <div className="Picture">
                <div src={this.state.svg}/>
            </div>
        );
    }
}

export default Picture;
