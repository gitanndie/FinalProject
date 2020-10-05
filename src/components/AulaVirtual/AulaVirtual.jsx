import React, { Component } from 'react'
import '../../components/AulaVirtual/AulaVirtual.css'
import 'bulma/css/bulma.css';

export default class AulaVirtual extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2><strong>Aula Virtual</strong> </h2>
                </div>
                <div className="column" id="container">
                    <div className="info-title"><strong>Materias</strong></div>
                    <div className="asignature">
                        <ul>
                            <li><a href="/">Artes</a></li>
                            <li><a href="/">Ed. Fisica</a></li>
                            <li><a href="/">Español</a></li>
                            <li><a href="/">Ingles</a></li>
                            <li><a href="/">Religión</a></li>
                            <li><a href="/">Quimica</a></li>
                            <li><a href="/">Matematicas</a></li>
                            <li><a href="/">Filosofia</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
