import React, { Component } from "react";
import Footer from "../../Shared/Footer";
import Awardbody from "./Awardbody";
import Awardnav from "./Awardnav";
import { withRouter } from "react-router-dom";
import paleta from '../../Images/Awards/paleta.jpeg'
import paletaagua from '../../Images/Awards/paletaagua.jpeg'
import colombina from '../../Images/Awards/colombina.jpeg'
import papasnaturales from '../../Images/Awards/papasnaturales.jpeg'
import papaspollo from '../../Images/Awards/papaspollo.jpg'
import papaslimon from '../../Images/Awards/papaslimon.jpeg'
import coca from '../../Images/Awards/coca.jpeg'
import cocabotella from '../../Images/Awards/cocabotella.jpg'
import manzana from '../../Images/Awards/manzana.jpeg'

class Award extends Component {
  state = {
    users: [],
    user: "",
    score: 0,
    gifts: [
      {
        puntos: 1500,
        imagen: paleta,
      },
      {
        puntos: 1800,
        imagen: paletaagua,
      },
      {
        puntos: 2000,
        imagen: colombina,
      },
      {
        puntos: 1300,
        imagen: papasnaturales,
      },
      {
        puntos: 1700,
        imagen: papaspollo,
      },
      {
        puntos: 1300,
        imagen: papaslimon,
      },
      {
        puntos: 2000,
        imagen: coca,
      },
      {
        puntos: 1800,
        imagen: cocabotella,
      },
      {
        puntos: 1200,
        imagen: manzana,
      },
    ],
  };
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ user: user ? user : "" });

    fetch("https://json-server-now.kira4489.vercel.app/users")
    .then((response) => response.json())
    .then((data) => this.setState({ users: data, score: data[0].score }));
  }

  close = () => {
    localStorage.removeItem("auth");
    this.props.history.replace("/");
  };

  restar = (point) => {
    const { score } = this.state
    if(point < score) {//this.state-user.points
        this.setState({ score: score - point});
        console.log(`restamos: ${point} de ${score}`)
    } else {
        console.log(`no tienes los puntos suficientes para reclamar este premio`)
    }
  }

  render() {
    return (
      <div>
        <Awardnav  user={this.state.user} close={this.close} points={this.state.score}/>
        <Awardbody gifts={this.state.gifts} restar={this.restar} />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Award);
