import React, { Component } from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import cabezarobot from "../../Images/cabezarobot.png";
import "./Review.css";
// import grafica from '../../Images/Reviews/grafica.jpeg'

export default class Review extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 id="h1">Evaluación</h1>
        <div className="panel-heading">
          <h4>En esta Evaluación mediremos tu conocimientos</h4>
          <h6>Esfuerzate y así ganarás muchos puntos</h6>
          <img src={cabezarobot} id="cabezarobot" alt="robot" />
          <form>
            <section className="column">
              <p>
                1. ¿Qué propiedad utilizamos para definir una imagen como fondo?
              </p>
              <div class="field">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question4" />
                    background-attachment
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question4" />
                    background-image
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question4" />
                    background-src
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question4" />
                    background-img
                  </label>
                </div>
              </div>
              <p>
                2. ¿Cuál es la forma más eficiente de aplicar estilos CSS en un
                documento HTML?
              </p>
              <div class="field">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question3" />
                    Incrustado en la cabecera
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question3" />
                    En linea
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question3" />
                    Hojas de estilo externas
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question3" />
                    Mediante PhP
                  </label>
                </div>
              </div>
              <p>3. ¿Que entiendes por css ?</p>
              <div class="field">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question1" />
                    Class style Sheets
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question1" />
                    Creative Style System
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question1" />
                    Cascading Style Sheets
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question1" />
                    Cascading Style System
                  </label>
                </div>
              </div>
              <p>
                4. ¿Qué propiedad utilizamos para definir el color de los
                bordes?
              </p>
              <div className="control">
              <label class="radio">
                    <input type="radio" name="question6" />
                  Border-color
                </label>
                <br />
                <label class="radio">
                    <input type="radio" name="question6" />
                  Color-border
                </label>
                <br />
                <label class="radio">
                    <input type="radio" name="question6" />
                  Border-bgcolor
                </label>
                <br />
                <label class="radio">
                    <input type="radio" name="question6" />
                  Border-style
                </label>
                <br />
              </div>
              <p>
                5. ¿Con qué propiedad se define el espacio entre el borde de un
                elemento y los elementos que lo rodean?
              </p>
              <div class="field">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question" />
                    Border
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question" />
                    Padding
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question" />
                    Margin
                  </label>
                  <br />
                  <label class="radio">
                    <input type="radio" name="question" />
                    Ninguna respuesta
                  </label>
                </div>
              </div>
              <div id="button">
                <button className="button is-primary">Enviar</button>
              </div>
            </section>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
