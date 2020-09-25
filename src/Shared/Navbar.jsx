import React, { Component } from 'react'
import cabezarobot from '../Images/cabezarobot.png'
import { withRouter } from "react-router-dom"
class Navbar extends Component {
    state = {
        user: ''
    }
    componentDidMount() {
        const user = localStorage.getItem("user")
        this.setState({ user: user ? user : '' });
        }
    close = () => {
        localStorage.removeItem("auth");
        this.props.history.replace("/")
    }
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
                        { this.state.user && this.state.user }
                    </a>
                    <a className="navbar-item" id="grado">
                        Grado 
                    </a>
                    </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a id="active"><i className="fas fa-signal"></i></a>
                        <br/>
                        <a className="button is-light" onClick={this.close}>Cerrar Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
        )
    }
}
export default withRouter(Navbar);

