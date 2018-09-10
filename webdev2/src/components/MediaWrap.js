import React, { Component } from 'react';
import Text from "./Text";


class MediaWrap extends Component {
    render() {
        return (
            <div className="MediaWrap">
                <h4>media wrap</h4>
                <p>picture component</p>
                <p>audio component</p>
                <Text/>
            </div>
        );
    }
}

export default MediaWrap;
