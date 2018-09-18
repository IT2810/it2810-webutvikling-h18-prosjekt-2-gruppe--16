import React, { Component } from 'react';

class MediaCategory extends Component {
    render() {
        return (
            <div className="MediaCategory">

                <h3>Bildetema</h3>
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


                <h3>Lydtema</h3>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="chants" checked={this.props.audioTheme === 'chants'}
                                   onChange={this.props.onAudioRadioButtonClicked}/>
                            Chant'er
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="eccentric" checked={this.props.audioTheme === 'eccentric'}
                                   onChange={this.props.onAudioRadioButtonClicked}/>
                            Eksentrisk
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="musical" checked={this.props.audioTheme === 'musical'}
                                   onChange={this.props.onAudioRadioButtonClicked}/>
                            Musikal
                        </label>
                    </div>
                </form>


                <h3>Teksttema</h3>
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
