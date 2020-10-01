import React, { Component } from 'react'
import cabezarobot from '../Images/cabezarobot.png'
class Navbar extends Component {
 
    render() {
        return (
            <>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img id="mini" src={cabezarobot} />
                    </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item"  id="user1">
                    <i className="fas fa-user" id="user"></i>
                        
                    </a>
                    <a className="navbar-item" id="grado">
                        Grado 
                    </a>
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button is-primary">Activo</button>
                        <button className="button is-light" >Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
        )
    }
}
export default Navbar;

