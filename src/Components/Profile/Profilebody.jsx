import React, { Component } from 'react';
import facebook from '../../Images/facebook.png'
import tiktok from '../../Images/tiktok.png'
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
                    <img src={facebook} alt=""/>
                    <br/>
                    <img src={youtube} alt=""/>
                    </div>
                    <br/>
                    <div className="column is-one-quarter" id="column-redes">
                    <img src={instagram} alt=""/>
                    <br/>
                    <img src={tiktok} alt=""/>
                    </div>
                    <div className="column is-one-quarter" id="column-redes">
                    <img src={snap} alt=""/>
                    <br/>
                    <img src={twitter} alt=""/>
                    </div>
                </div>
                <div id="button">
                    <button className="button is-primary" onClick={() => this.props.history.push("/Award")}>Recompensa</button>
                    <button className="button is-primary" onClick={() => this.props.history.push("/Review")}>Evaluación</button>
                    <button className="button is-primary" onClick={() => this.props.history.push("/School") }>Mi colegio</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Profilebody);
