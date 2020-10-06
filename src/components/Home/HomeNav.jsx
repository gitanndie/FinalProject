import React, { Component } from 'react'
import robothead from '../../Images/cabezarobot.png'
import './Styles/HomeNav.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bulma/css/bulma.css';


export default class HomeNav extends Component {
    render() {
        return (
        <>
    {/*Barra de navegacion*/}    
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <input type="checkbox" id="res-menu"/>
                    <label htmlFor="res-menu">
                        <i> <FontAwesomeIcon id="icon-bars" icon="bars"/></i>
                        <i> <FontAwesomeIcon id="icon-times" icon="times"/></i>
                    </label>
                    <img id="head-robot" alt="img" src={robothead} ></img>
                    <ul>
                        <li> <a href="/" >Inicio</a> </li>
                        <li> <a href="/" >Docentes</a> </li>
                        <li> <a href="/" >Aula Virtual</a> 
                             <ul id="calificaciones"><li><a href="/" >Calificaciones</a> </li></ul>
                        </li>
                    </ul>
                </div>    
            </nav>
          </>
        )
    }
}
