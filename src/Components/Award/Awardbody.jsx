import React, { Component } from 'react'
import './Award.css'
/* import Bulma from '@vizuaalog/bulmajs'; */
/* import Notification from 'react-bulma-notification'; */
/* import 'react-bulma-notification/css/index.css'; */
import paleta from '../../Images/Awards/paleta.jpeg'
import paletaagua from '../../Images/Awards/paletaagua.jpeg'
import colombina from '../../Images/Awards/colombina.jpeg'
import papasnaturales from '../../Images/Awards/papasnaturales.jpeg'
import papaspollo from '../../Images/Awards/papaspollo.jpg'
import papaslimon from '../../Images/Awards/papaslimon.jpeg'
import coca from '../../Images/Awards/coca.jpeg'
import cocabotella from '../../Images/Awards/cocabotella.jpg'
import manzana from '../../Images/Awards/manzana.jpeg'
import Gifts from './Gifts'

export default class Awardbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifts: [
                {
                    puntos: "1500 pt",
                    imagen: paleta,                
                },
                {
                    puntos: "1800 pt",
                    imagen: paletaagua,                
                },
                {
                    puntos: "2000 pt",
                    imagen: colombina,                
                },
                {
                    puntos: "1300 pt",
                    imagen: papasnaturales,                
                },
                {
                    puntos: "1700 pt",
                    imagen: papaspollo,                
                },
                {
                    puntos: "1300 pt",
                    imagen: papaslimon,                
                },
                {
                    puntos: "2000 pt",
                    imagen: coca,                
                },
                {
                    puntos: "1800 pt",
                    imagen: cocabotella,                
                },
                {
                    puntos: "1200 pt",
                    imagen: manzana,                
                }
            ]
            }
        }    
    render() {
        return (
            <div>
                <h1 id="h1">Elige tu premio</h1>
                <div className="panel-heading columns">
                <div className="column" id="column"> 
                <div className="card-content">
                    <div className="media" id="prod">
                    <div className="media-left">
                        {this.state.gifts.map((gift, index) => {
                return <Gifts key={index} puntos={gift.puntos} imagen={gift.imagen} />
                })} 
                    </div>
                    </div>
                </div>
                </div>
                </div> 
                    <nav className="pagination" role="navigation" aria-label="pagination">
                        <ul className="pagination-list">
                            <li>
                            <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                            </li>
                            <li>
                            <a className="pagination-link" aria-label="Goto page 2">2</a>
                            </li>
                            <li>
                            <a className="pagination-link" aria-label="Goto page 3">3</a>
                            </li>
                        </ul>
                </nav>
            </div>
            
        )
    }
}
