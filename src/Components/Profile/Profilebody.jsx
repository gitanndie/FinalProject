import React, { Component } from 'react';
import facebook from '../../Images/facebook.png'
import pinterest from '../../Images/pinterest.png'
import instagram from '../../Images/instagram.jpg'
import youtube from '../../Images/youtube.png'
import snap from '../../Images/snap.png'
import twitter from '../../Images/twitter.png'
import { withRouter } from "react-router-dom";

class Profilebody extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns" id="redes">
                    <div className="column is-one-quarter" id="column-redes">
                    <a href="https://www.facebook.com/julioprofenet/" target="_blank">
                    <img src={facebook} alt="facebook"/>
                    </a>
                    <br/>
                    <a href="https://www.youtube.com/user/julioprofe/" target="_blank">
                    <img src={youtube} alt=""/>
                    </a>
                    </div>
                    <br/>
                    <div className="column is-one-quarter" id="column-redes">
                    <a href="https://www.instagram.com/developers_team/?hl=es-la" target="_blank">
                    <img src={instagram} alt="instagram"/>
                    </a>
                    <br/>
                    <a href="#" target="_blank">
                    <img src={snap} alt=""/>
                    </a>
                    </div>
                    <div className="column is-one-quarter" id="column-redes">
                    <a href="https://co.pinterest.com/teresaprieto792/" target="_blank">
                    <img src={pinterest} alt="pinterest"/>
                    </a>
                    <br/>
                    <a href="https://twitter.com/hektorprofe?lang=es" target="_blank">
                    <img src={twitter} alt=""/>
                    </a>
                    </div>
                </div>
                <div id="button">
                <button className="button is-primary" onClick={() => this.props.history.push("/Review")}>Reto</button>
                    <button className="button is-primary" onClick={() => this.props.history.push("/Award")}>Recompensa</button>
               {/* <button className="button is-primary" onClick={() => this.props.history.push("/Home") }>Mi colegio</button> */}
                </div>
            </div>
        )
    }
}
export default withRouter(Profilebody);
