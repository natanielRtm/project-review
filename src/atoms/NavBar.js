import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md fixed-top" style={{backgroundColor:"blue"}}>
                    <a className="navbar-brand" style={{color:"white"}}>
                        PokeDex
                    </a>                   
                </nav>
            </div>
        )
    }
}
