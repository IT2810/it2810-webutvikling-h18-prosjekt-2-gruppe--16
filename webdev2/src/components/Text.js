import React, { Component } from "react";

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            headline: null,
            text: null,
            path: "media/text/" + props.type + "/" + props.type + props.number   //type= haiku/poem/songtext number=1-4 //use this to make text array https://delim.co/#
        };
    }

    //This ensures that the state is updated when the props changes. And thus the componentDidUpdate is activated.
    static getDerivedStateFromProps(props, state) {
        return{
            path: "media/text/" + props.type + "/" + props.type + props.number
        };
    }

    //this fetches the text when a text component is created. this ensures that all the mediaDisplayAreas have a text when category is updated
    //the json is paresed in to headline and text, where text is an array that is joined with linebreakes
    componentDidMount(){
        fetch(this.state.path)
            .then(response => response.json())
            .then(response =>
                this.setState({headline:response.headline, text:response.text.join('\n')})
            )
            .catch(error => {
                console.error(error);
            })

    }

    //this fetches a new text when this component is updated, when the path is updated.
    //the json is paresed in to headline and text, where text is an array that is joined with linebreakes
    componentDidUpdate(){
        fetch(this.state.path)
            .then(response => response.json())
            .then(response =>
                this.setState({headline:response.headline, text:response.text.join('\n')})
            )
            .catch(error => {
                console.error(error);
            })

    }

    render() {
        return (
            <div className="Text">
                <h3>{this.state.headline}</h3>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Text;
