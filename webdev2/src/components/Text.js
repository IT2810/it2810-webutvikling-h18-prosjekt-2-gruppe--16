import React, { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      path: 'media/text/haiku/haiku1',
    };
  }

  componentDidMount() {
    fetch(this.state.path)
      .then(r => r.text()) //this code line need to 'write' lines into the variable
      //we need to parse the text into lines
      .then(text => this.setState({ parsedText: text }));
  }

  render() {
    return (
      <div className="Text">
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default Text;
