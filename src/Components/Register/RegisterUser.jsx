import React, { Component } from 'react'
import "./RegisterUser.css";
import 'bulma/css/bulma.css';
import cabezarobot from '../../Images/cabezarobot.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default class Register extends Component {
    render() {
        return (
            <div className="column" id="register">
                <img className="head" src={cabezarobot} alt="robot" />
                    <div className="Registrar">
                        <h1 id="title-registrar">Registrar Usuario</h1>
                    </div>
                        <div className="titles">
                            <p id="correo"> Correo </p>
                        </div>    
                        <div className="field">
                        <div className="control has-icons-left has-icons-right">
                        <span className="icon">
                                <i><FontAwesomeIcon id="icon-email" icon="envelope"/></i>
                            </span>
                            <span className="icon">
                                <i><FontAwesomeIcon id="icon-check" icon="check"/></i>
                            </span>
                            <input className="input is-medium" id="input1" type="email" placeholder="Ingrese correo electronico" required />
                        </div>
                    </div> 
                        <div className="titles">    
                            <p className="contraseña"> Contraseña </p>
                        </div>    
                        <div className="field">
                            <p className="control has-icons-left">
                        <span className="icon">
                                <i><FontAwesomeIcon id="icon-lock" icon="lock"/></i>
                            </span>
                            <input className="input is-medium" id="input2" type="password" placeholder="Ingrese contraseña" required/>
                            </p>
                        </div> 
                        <div className="control1">
                            <label className="radio"><input type="radio" name="answer" />Docente</label>
                            <label className="radio"><input type="radio" name="answer" />Estudiante</label>
                        </div>
                        <div className="control">
                            <button id="boton" className="button is-primary">Enviar</button>
                        </div>
                        <br/>
                        <div className="option">
                        <p>Ya tienes cuenta?</p><a id="link" href=""> Ingresa aquí</a>
                    </div>
                </div>
        )
    }
}