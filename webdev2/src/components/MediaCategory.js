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





                <h3>Text</h3>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="haiku" checked={this.props.textTheme === 'haiku'}
                                   onChange={this.props.onTextRadioButtonClicked}/>
                            Haiku
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="poem" checked={this.props.textTheme === 'poem'}
                                   onChange={this.props.onTextRadioButtonClicked}/>
                            Dikt
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="songtext" checked={this.props.textTheme === 'songtext'}
                                   onChange={this.props.onTextRadioButtonClicked}/>
                            Sangtekst
                        </label>
                    </div>
                </form>

            </div>

        );
    }

}

export default MediaCategory;
