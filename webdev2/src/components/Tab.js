import React, { Component } from 'react';

const pointerStyle = {cursor: 'pointer'};


class Tab extends Component {
  constructor(props){
    super(props);
    this.state ={
      tabSelected: null
    }
  }

  componentDidMount(){
    this.setState({tabSelected: this.props.tabNumber})
  }

    render() {
        return (
            <p
              onClick={this.onUpdateTab.bind(this)}
              style={pointerStyle}
            >
              {this.props.tabTitle}
            </p>
        );
    }

    onUpdateTab = () => {
        this.props.changeTab(this.state.tabSelected)
    }
}

export default Tab;
