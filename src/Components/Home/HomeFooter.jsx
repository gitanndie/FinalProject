import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import '../../components/Home/Styles/HomeFooter.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faGoogle} from "@fortawesome/free-brands-svg-icons";


export default class HomeFooter extends Component {
    render() {
        return (
            <footer className="footer">
               <div className="container" id="icons-container">
               <span class="icon">
                    <a href="/"><FontAwesomeIcon id="icon-facebook" icon={faFacebook} /></a>
                    <a href="/"><FontAwesomeIcon id="icon-twitter" icon={faTwitter} /></a>
                    <a href="/"><FontAwesomeIcon id="icon-google"icon={faGoogle} /></a>
               </span>
               </div>

               <div className="content has-text-centered" id="text-container">
                    <p>EDDY-Todos los derechos son reservados</p>
                    <p>2020 | Medellin-Antioquia</p>
               </div> 
            </footer>
        )
    }
}
