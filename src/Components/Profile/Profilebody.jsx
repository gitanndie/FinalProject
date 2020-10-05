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
                    <a href="https://www.facebook.com/julioprofenet/">
                    <img src={facebook} alt="facebook"/>
                    </a>
                    <br/>
                    <a href="https://www.youtube.com/user/julioprofe/">
                    <img src={youtube} alt=""/>
                    </a>
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
                <button className="button is-primary" onClick={() => this.props.history.push("/Review")}>Evaluación</button>
                    <button className="button is-primary" onClick={() => this.props.history.push("/Award")}>Recompensa</button>
               <button className="button is-primary" onClick={() => this.props.history.push("/Home") }>Mi colegio</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Profilebody);
