import React, { Component } from 'react';
import '../css/characterInfo.css';

class CharacterInfo extends Component {

    render() {

        return (
            <div>
                <h2>Informations</h2>
                    <div id="container2">
                        <div className="element2">
                            Nom:
                        </div>
                        <div className="element2">
                            {this.props.character.name}
                        </div>
                        <div className="element2">
                            Année de naissance:
                        </div>
                        <div className="element2">
                            {this.props.character.birth_year}
                        </div>
                        <div className="element2">
                            Taille (cm):
                        </div>
                        <div className="element2">
                            {this.props.character.height}
                        </div>
                        <div className="element2">
                            Poids (kg):
                        </div>
                        <div className="element2">
                            {this.props.character.mass}
                        </div>
                    </div>
            </div>
        );
    }
}

export default CharacterInfo;