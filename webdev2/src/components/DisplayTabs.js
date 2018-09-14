import React, { Component } from 'react';

class DisplayTabs extends Component {
    render() {
        return (
            <div className="DisplayTabs">
                <p onClick={this.props.showTab1}>TAB 1</p>
                <p onClick={this.props.showTab2}>TAB 2</p>
                <p onClick={this.props.showTab3}>TAB 3</p>
                <p onClick={this.props.showTab4}>TAB 4</p>
            </div>
        );
    }


}

export default DisplayTabs;
