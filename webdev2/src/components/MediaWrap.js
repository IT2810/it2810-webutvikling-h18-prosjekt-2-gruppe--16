import React, { Component } from 'react';
import Picture from "./Picture";
import Text from "./Text";

class MediaWrap extends Component {
    render() {
        return (
            <div className="MediaWrap">
                <h4>media wrap</h4>
                <p>picture component</p>
                <p>audio component</p>
                <p>text component</p>
                <Picture src="media/picture/1.jpg"/>
                <Text type={"haiku"} number={"4"}/>

            </div>
        );
    }
}

export default MediaWrap;
