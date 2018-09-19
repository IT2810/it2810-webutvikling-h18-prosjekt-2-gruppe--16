import React, { Component } from 'react';

const pStyle = {cursor: 'pointer'}


class Tab extends Component {

  constructor(props){
    super();
    this.state ={
      tabSelected:null

    }
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
            value={this.props.value}
            style={pStyle}>{this.props.tabTitle}
            </p> //this is a callback function that passes the value of the tab
        );
    }
}

export default Tab;
