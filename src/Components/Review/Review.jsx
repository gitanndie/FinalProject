import React, { Component } from 'react'
import Navbar from '../../Shared/Navbar'
import Footer from '../../Shared/Footer'
import cabezarobot from '../../Images/cabezarobot.png'
import './Review.css'
import grafica from '../../Images/Reviews/grafica.jpeg'

export default class Review extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1 id="h1">Evaluación</h1>
                <div className="panel-heading">
                    <h4>En esta Evaluación mediremos tu conocimientos</h4>
                    <h6>Esfuerzate y así ganarás muchos puntos</h6>
                    <img src={cabezarobot} id="cabezarobot" alt="robot"/>
                    <section>
                        <p>1. Suponga que usted es el encargado de producción de bebidas gaseosa.</p>
                        <p>El siguiente gráfico muestra las ventas de dos tipos de bebidas gaseosas durante
                            4 años.</p>
                        <img src={grafica} alt="grafica"/>
                        <p>Si la tendencia de las ventas continúa durante los próximos 10 años,</p>
                            <p>determina el año en que las ventas de Guinda serán iguales a las ventas de
                            Limón.</p>
                    </section>

                    <section>
                    <div className="control">
                        <label className="radio">
                            <input type="radio" name="rsvp"/>
                            1000 Toneladas
                        </label>
                        <label className="radio">
                            <input type="radio" name="rsvp"/>
                            2000 Toneladas
                        </label>
                        <label className="radio" >
                            <input type="radio" name="rsvp" />
                            800 Toneladas
                        </label>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        )
    }
}
