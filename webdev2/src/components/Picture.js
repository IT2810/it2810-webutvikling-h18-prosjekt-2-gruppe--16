import React, { Component } from "react";

class Picture extends Component {
    constructor(props){
        super(props);
        this.state = {
            svg: null,
            fetched:[],
            path: "media/picture/" + props.type + "/" + props.type + props.number +".svg"  //type= haiku/poem/songtext number=1-4 //use this to make text array https://delim.co/#
        };
    }

    //This ensures that the state is updated when the props changes. And thus the componentDidUpdate is activated.
    static getDerivedStateFromProps(props, state) {
        return{
            path: "media/picture/" + props.type + "/" + props.type + props.number +".svg"
        };
    }

    //when a picture component is created it fetches the picture
    //Without it the only the active mediaDisplayArea would be loaded
    componentDidMount(){
        fetch(this.state.path)
            .then(response => response.text())
            .then(response => this.setState({svg:response}))
    }

    //when a the state of this picture component is updated a new picture is fetched
    componentDidUpdate(){
        fetch(this.state.path)
            .then(response => response.text())
            .then(response => this.setState({svg:response}))
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.svg}}/>
        );
    }
}

export default Picture;
