import React, { Component } from 'react';

const pStyle = {cursor: 'pointer'}


class Tab extends Component {
  constructor(props){
    super();
    this.state ={
      tabSelected:null   //an int indecating the tab selected
    }
  }

  //setts state to the static value of this tab, on mount
  componentWillMount(){
    this.setState({tabSelected:this.props.value})
  }

  //setts state to the static value of this tab, on update.
  componentDidUpdate(){
    if (this.props.value !== this.state.tabSelected){
      this.setState({tabSelected:this.props.value})
    }
  }

  //this is a callback function that passes the value of the tab
  onUpdateTab(){
    this.props.changeTab(this.state.tabSelected)
  }

    render() {
        return (
            <p
            onClick={this.onUpdateTab.bind(this)}
            value={this.props.value}
            style={pStyle}>{this.props.tabTitle}
            </p>
        );
    }
}

export default Tab;
