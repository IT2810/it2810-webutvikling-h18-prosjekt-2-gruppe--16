import React, { Component } from 'react';

class MediaCategory extends Component {
    render() {
        return (
            <div className="MediaCategory">

                <h3>Bildetema</h3>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="circle" checked={this.props.imgTheme === 'circle'}
                                   onChange={this.props.changeImgTheme}/>
                            Circle
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="triangle" checked={this.props.imgTheme === 'triangle'}
                                   onChange={this.props.changeImgTheme}/>
                            triangle
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="square" checked={this.props.imgTheme === 'square'}
                                   onChange={this.props.changeImgTheme}/>
                            Square
                        </label>
                    </div>
                </form>


                <h3>Lydtema</h3>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="chants" checked={this.props.audioTheme === 'chants'}
                                   onChange={this.props.changeAudioTheme}/>
                            Chant'er
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="eccentric" checked={this.props.audioTheme === 'eccentric'}
                                   onChange={this.props.changeAudioTheme}/>
                            Eksentrisk
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="musical" checked={this.props.audioTheme === 'musical'}
                                   onChange={this.props.changeAudioTheme}/>
                            Musikal
                        </label>
                    </div>
                </form>


                <h3>Teksttema</h3>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="haiku" checked={this.props.textTheme === 'haiku'}
                                   onChange={this.props.changeTextTheme}/>
                            Haiku
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="poem" checked={this.props.textTheme === 'poem'}
                                   onChange={this.props.changeTextTheme}/>
                            Dikt
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="songtext" checked={this.props.textTheme === 'songtext'}
                                   onChange={this.props.changeTextTheme}/>
                            Sangtekst
                        </label>
                    </div>
                </form>

            </div>

        );
    }

}

export default MediaCategory;
