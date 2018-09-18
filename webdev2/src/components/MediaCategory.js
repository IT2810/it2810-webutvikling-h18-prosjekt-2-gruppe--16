import React, { Component } from 'react';

class MediaCategory extends Component {
    render() {
        return (
            <div className="MediaCategory">

                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="nature" checked={this.props.imgTheme === 'nature'}
                                   onChange={this.props.onImgRadioButtonClicked}/>
                            Natur
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="social" checked={this.props.imgTheme === 'social'}
                                   onChange={this.props.onImgRadioButtonClicked}/>
                            Sosialt
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="space" checked={this.props.imgTheme === 'space'}
                                   onChange={this.props.onImgRadioButtonClicked}/>
                            Verdensrommet
                        </label>
                    </div>
                </form>


                <h3>Audio</h3>
                <input type="radio"/>
                <h3>Text</h3>
                <input type="radio"/>

            </div>

        );
    }

}

export default MediaCategory;
