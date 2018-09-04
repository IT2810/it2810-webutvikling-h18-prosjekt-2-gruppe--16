import React, { Component } from 'react';
import  MediaWrap from './MediaWrap';
import  MediaSelect from './MediaSelect';

class MediaCategory extends Component {
    render() {
        return (
            <div className="MediaCategory">
                <h4>media category</h4>
                <MediaWrap/>   {/*mediaWrap and mediaSelect is in this class because we need to send props based this class*/}
                <MediaSelect/>
            </div>
        );
    }
}

export default MediaCategory;
