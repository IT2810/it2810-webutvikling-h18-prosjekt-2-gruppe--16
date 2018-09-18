import React, { Component } from 'react';

class MediaCategory extends Component {
    render() {
        return (
            <div className="MediaCategory">

                <form name="myForm">
                    <fieldset>
                        <legend><strong>Velg et bildetema</strong></legend>
                        <input type="radio" name="my_options" value="huey" onClick="" />

                        <input type="radio" name="my_options" value="dewey" onClick="" />

                        <input type="radio" name="my_options" value="louie" onClick="" />

                    </fieldset>
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
