import React, { Component } from 'react'
import cabezarobot from '../../Images/cabezarobot.png'
import './Home.css'
import 'bulma/css/bulma.css';
export default class HomeNav extends Component {
    render() {
        return (
        <>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img id="mini" src={cabezarobot} />
                    </a>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Docentes</a></li>
                        <li><a href="/">Aula Virtual</a></li>
                    </ul>
                </div>    
            </nav>
        </>
        )
    }
}
