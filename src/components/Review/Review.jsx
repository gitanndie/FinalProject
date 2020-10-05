import React, { Component } from "react";
import cabezarobot from "../../Images/cabezarobot.png";
import "./Review.css";
import swal from "sweetalert"

// import grafica from '../../Images/Reviews/grafica.jpeg'

export default class Review extends Component {
  
  state = { answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            puntos: 0
};

  valueToQuestion1 = (e) => {
    this.setState({
      answer1: e.target.value  
  })
  };

  valueToQuestion2 = (e) => {
    this.setState({
      answer2: e.target.value  
  })
  };

  valueToQuestion3 = (e) => {
    this.setState({
      answer3: e.target.value  
  })
  };

  valueToQuestion4 = (e) => {
    this.setState({
      answer4: e.target.value  
  })
  };

  valueToQuestion5 = (e) => {
    this.setState({
      answer5: e.target.value  
  })
  };

  onClickSubmit = (e)  => {
    e.preventDefault();
    const res = {
    answer1: this.state.answer1,
    answer2: this.state.answer2,
    answer3: this.state.answer3,
    answer4: this.state.answer4,
    answer5: this.state.answer5,
    puntos: this.state.answer1
  }
    this.setState(function(){
      return {
        puntos: res.answer1 
      }
    })
    console.log(res)

  if (res.object === null){
    swal({
          title: `Puntaje obtenido: 0 Puntos`,
      });
    
  } else {
    swal({
          title: `Puntaje obtenido:`, 
          text: `${this.state.answer1} Puntos`,
      })
  }}
  
  render() {
    return (
      <>
      
      <div>
      <pre style={{color: "green", fontSize: "2em", position: "fixed"}}>{ JSON.stringify(this.state)}</pre>
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
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question1" required value={0} onChange={this.valueToQuestion1}/>
                    background-attachment
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question1" required value={0} onChange={this.valueToQuestion1}/>
                    background-image
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question1" required value={0} onChange={this.valueToQuestion1}/>
                    background-src
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question1" required value={1000} onChange={this.valueToQuestion1}/>
                    background-img
                  </label>
                </div>
              </div>
              <p>
                2. ¿Cuál es la forma más eficiente de aplicar estilos CSS en un
                documento HTML?
              </p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question2" required value={0} onChange={this.valueToQuestion2}/>
                    Incrustado en la cabecera
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question2" required value={0} onChange={this.valueToQuestion2}/>
                    En linea
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question2" required value={1000} onChange={this.valueToQuestion2} />
                    Hojas de estilo externas
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question2" required value={0} onChange={this.valueToQuestion2}/>
                    Mediante PhP
                  </label>
                </div>
              </div>
              <p>3. ¿Que entiendes por css ?</p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question3" required value={0} onChange={this.valueToQuestion3}/>
                    Class style Sheets
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question3" required value={0} onChange={this.valueToQuestion3}/>
                    Creative Style System
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question3" required value={1000} onChange={this.valueToQuestion3}/>
                    Cascading Style Sheets
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question3" required value={0} onChange={this.valueToQuestion3}/>
                    Cascading Style System
                  </label>
                </div>
              </div>
              <p>
                4. ¿Qué propiedad utilizamos para definir el color de los
                bordes?
              </p>
              <div className="control">
              <label className="radio">
                    <input type="radio" name="question4" required value={1000} onChange={this.valueToQuestion4}/>
                  Border-color
                </label>
                <br />
                <label className="radio">
                    <input type="radio" name="question4" required value={0} onChange={this.valueToQuestion4}/>
                  Color-border
                </label>
                <br />
                <label className="radio">
                    <input type="radio" name="question4" required value={0} onChange={this.valueToQuestion4}/>
                  Border-bgcolor
                </label>
                <br />
                <label className="radio">
                    <input type="radio" name="question4" required value={0} onChange={this.valueToQuestion4}/>
                  Border-style
                </label>
                <br />
              </div>
              <p>
                5. ¿Con qué propiedad se define el espacio entre el borde de un
                elemento y los elementos que lo rodean?
              </p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question5" required value={0} onChange={this.valueToQuestion5}/>
                    Border
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question5" required value={0} onChange={this.valueToQuestion5}/>
                    Padding
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question5" required value={1000} onChange={this.valueToQuestion5}/>
                    Margin
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question5" required value={0} onChange={this.valueToQuestion5}/>
                    Ninguna respuesta
                  </label>
                </div>
              </div>
              <div id="button">
                <button className="button is-primary" required onClick ={this.onClickSubmit}>Enviar</button>
              </div>
            </section>
          </form>
        </div>
      </div>
      </>
    );
  }
}
