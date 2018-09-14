import React, { Component } from 'react';

class Tab extends Component {
    render() {
        return (
            <p onClick={this.props.tabToRender}>{this.props.tabTitle}</p>
        );
    }


}

export default Tab;
