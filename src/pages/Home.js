import React, { Component } from 'react';
import Header from '../Components/Header';
import PokemonList from '../molecules/PokemonList';

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <Header/>
                <div className="col">
                    <PokemonList />
                </div>
             </div>
        )
    }
}
