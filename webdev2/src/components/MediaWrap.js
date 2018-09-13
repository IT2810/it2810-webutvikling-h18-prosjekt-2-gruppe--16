import React, { Component } from 'react';
<<<<<<< HEAD
import Text from "./Text";

=======
import Picture from "./Picture";
>>>>>>> picture

class MediaWrap extends Component {
    render() {
        return (
            <div className="MediaWrap">
                <h4>media wrap</h4>
                <p>picture component</p>
                <p>audio component</p>
<<<<<<< HEAD
<<<<<<< HEAD
                <Text/>
=======
                <p>text component</p>
                <Picture src="media/picture/1.jpg"/>
>>>>>>> picture
=======
                <Text type={"haiku"} number={"4"}/>
>>>>>>> devText
            </div>
        );
    }
}

export default MediaWrap;
