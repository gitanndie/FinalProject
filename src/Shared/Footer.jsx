import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <span id="icons">
                        <a href="https://www.facebook.com/Eddy-Software-Educativo-105583811295277" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/SoftwareEddy" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="mailto:eddysoftwareducativo@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                        </span>
                        <p>
                        <strong>EDDY APP</strong> by <a href="https://jgthms.com">Todos los derechos son reservados</a>. The source code is licensed
                        </p>
                    </div>
            </footer>
            </div>
        )
    }
}
