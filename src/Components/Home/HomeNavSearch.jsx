import React, { Component } from 'react'
import '../../components/Home/Styles/HomeNavSearch.css'
import 'bulma/css/bulma.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class HomeNavSearch extends Component {
    render() {
        return (
            <nav className="navSearch" role="navigation" aria-label="main navigation">
               
                <div className="control">
                   <h1><strong>EDDY</strong> </h1>
                    <input id="input-search" className="input is-info" type="text" placeholder="Search"/>
                    <label htmlFor="res-menu">
                        <i> <a href="/"><FontAwesomeIcon id="user-icon" icon="user"/></a></i>
                        <i> <a href="/"><FontAwesomeIcon id="bell-icon" icon="bell"/></a></i>
                        <i> <a href="/"><FontAwesomeIcon id="search-icon" icon="search"/></a></i>
                    </label>
                </div>
            </nav>
        )
    }
}
