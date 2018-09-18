import React, { Component } from "react";


class MediaDisplayArea extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //render if props.displayNumber=props.tabSelected
    //https://reactjs.org/docs/conditional-rendering.html
    render() {
        return (
            <div className="MediaWrap">

                <h2>Artwork</h2>
                {/*picture*
                <Picture src={this.props} />
                {/*text*/}


                {/*Audio*
                <audio controls loop>
                    <source src={this.props.audio.path} type="audio/mpeg" />
                </audio>
                */}

            </div>
        );
    }



}

export default MediaDisplayArea;

