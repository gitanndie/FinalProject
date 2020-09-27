
import React, { Component } from 'react'
import "./RegisterUser.css";
import 'bulma/css/bulma.css';
import Eddy from '../../Images/Eddy-radius.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios"
import swal from "sweetalert"


export default class Register extends Component {
    /*Definicion de datos para el estado*/
    state = {
        users: [],
        useremail: [],
        userpassword: [],
        userperfil: "",
    }
    /*Obteniendo datos de la API por el metodo get*/
    async componentDidMount() {
        const res = await axios.get("http://localhost:3000/users");
        this.setState({ users: res.data })
        console.log(this.state.users)
    }
    /*Array function, eventos y actualizacion del estado*/
    onChangeUseremail = (e) => {
        this.setState({
            useremail: e.target.value
        })
    }
    onChangeUsepassword = (e) => {
        this.setState({
            userpassword: e.target.value
        })
    }
    onChangeUserperfil = (e) => {
        this.setState({
            userperfil: e.target.checked
        })
    }
    /*Peticion por metodo post para agregar usuarios usando axios*/
    onSubmit = async e => {
        e.preventDefault();
        const res = axios.post("http://localhost:3000/users", {
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
            userperfil: this.state.userperfil
        })
        console.log(res)
        e.target.reset()
    /*Alerta usando la dependencia sweetalert*/
        swal({
            title: "Bienvenid@ a EDDY",
            text: "El usuario ha sido creado exitosamente",
            icon: "success"
        });
    }
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
    render() {
        return (
    
            <div className="column" id="register">
    {/*Header formulario*/}            
                <img className="head" src={Eddy} alt="robot" />
                <div className="Registrar">
                    <h1 id="title-registrar">Registrar Usuario</h1>
                </div>
                <div className="titles">
                    <p id="correo"> Correo </p>
                </div>
    {/*formulario de registro*/} 
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <span className="icon">
                                <i><FontAwesomeIcon id="icon-email" icon="envelope" /></i>
                            </span>
                            <span className="icon">
                                <i><FontAwesomeIcon id="icon-check" icon="check" /></i>
                            </span>
                            <input className="input is-medium" id="input1" type="email"
                                placeholder="Ingrese correo electronico"
                                required onChange={this.onChangeUseremail} />
                        </div>
                    </div>
                    <div className="titles">
                        <p className="contraseña"> Contraseña </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <span className="icon">
                                <i><FontAwesomeIcon id="icon-lock" icon="lock" /></i>
                            </span>
                            <input className="input is-medium" id="input2" type="password"
                                placeholder="Ingrese contraseña"
                                required onChange={this.onChangeUsepassword} />
                        </p>
                    </div>
                    <div className="control1">
                        <label className="radio"><input type="radio" name="answer" required onChange={this.onChangeUserperfil} />Docente</label>
                        <label className="radio"><input type="radio" name="answer" required onChange={this.onChangeUserperfil} />Estudiante</label>
                    </div>
                    <div className="control">
                        <button onClick={swal} type="submit" id="boton" className="button is-primary">Enviar</button>
                    </div>
                </form>
    {/*Footer formulario*/}            
                <br />
                <div className="option">
                    <p>Ya tienes cuenta?</p><a id="link" href=""> Ingresa aquí</a>
                </div>
            </div>
        )
    }
}