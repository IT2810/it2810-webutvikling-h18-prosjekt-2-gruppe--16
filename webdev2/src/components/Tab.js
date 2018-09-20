import React, { Component } from 'react';

const pointerStyle = {cursor: 'pointer'}


class Tab extends Component {
  constructor(props){
    super();
    this.state ={
      tabSelected:null
    }
  }

  componentWillMount(){
    this.setState({tabSelected:this.props.value})
  }

  componentDidUpdate(){
    if (this.props.value !== this.state.tabSelected){
      this.setState({tabSelected:this.props.value})}
  }
  onUpdateTab(){
    this.props.changeTab(this.state.tabSelected)
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
}

export default Tab;
