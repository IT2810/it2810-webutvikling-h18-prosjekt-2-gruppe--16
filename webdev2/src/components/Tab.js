import React, { Component } from 'react';

const pStyle = {cursor: 'pointer'}

class Tab extends Component {
    render() {
        return (
            <p onClick={this.props.setTab} value={this.props.value} style={pStyle}>{this.props.tabTitle}</p> //this is a callback function that passes the value of the tab
        );
    }
}

export default Tab;
