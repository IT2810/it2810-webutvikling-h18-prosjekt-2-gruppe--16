import React, { Component } from 'react';

const pStyle = {cursor: 'pointer'}

class Tab extends Component {
    render() {
        return (
            <p onClick={this.props.tabToRender} style={pStyle}>{this.props.tabTitle}</p>
        );
    }


}

export default Tab;
