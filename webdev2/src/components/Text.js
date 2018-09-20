import React, { Component } from "react";

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            headline: null,
            text: null,
            path: "media/text/" + props.type + "/" + props.type + props.number
        };
    }

    componentDidMount(){
        fetch(this.state.path)
            .then(response => response.json())
            //.then(log => console.log(log.text.join('\n')))
            //note to self: don't console log any data before this point it breaks the code by ending the stream
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
