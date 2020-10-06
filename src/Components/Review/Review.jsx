import React, { Component } from "react";
import Layout from "../Layout/Layout";
import cabezarobot from "../../Images/cabezarobot.png";
import "./Review.css";
import swal from "sweetalert"

export default class Review extends Component {
  state = {
    score: 5000,
    answer1: 0,
            answer2: 0,
            answer3: 0,
            answer4: 0,
            answer5: 0,
            puntos: 0
}

valueToQuestion1 = (e) => {
  this.setState({
    answer1: Number(e.target.value)  
})
};
valueToQuestion2 = (e) => {
  this.setState({
    answer2: Number(e.target.value)  
})
};
valueToQuestion3 = (e) => {
  this.setState({
    answer3: Number(e.target.value) 
})
};

valueToQuestion4 = (e) => {
  this.setState({
    answer4: Number(e.target.value)  
})
};
valueToQuestion5 = (e) => {
  this.setState({
    answer5: Number(e.target.value)  
})
};
onClickSubmit = (e)  => {
  e.preventDefault();
  let x = this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4 + this.state.answer5
  this.setState({puntos: x})
  const res = {
                answer1: this.state.answer1,
                answer2: this.state.answer2,
                answer3: this.state.answer3,
                answer4: this.state.answer4,
                answer5: this.state.answer5,
                puntos: this.state.puntos
              }
  console.log(res)
  e.target.reset()
  this.setState(() => this.initialState)
if (res.Object === null){
  swal({
        title: `Puntaje obtenido: 0 Puntos`,
    });
} else {
  this.setState({score:this.state.score+this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4 + this.state.answer5})
  
  swal({
        title: `Puntaje obtenido:`, 
        text: `${this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4 + this.state.answer5} Puntos`,
    })
}}

// sumar = (point) =>{
//   const {score} = this.state;
//   if(point < score){
//     this.setState({ score: score + point });
//     console.log(`sumamos: ${point} de ${score}`);
//   } else {
//     swal(`si no se sumo puntos`);
//   }
// };
 
render() {
    return (
      <div>
        <Layout score={this.state.score}>
        <h1 id="h1">Evaluación</h1>
        <div className="panel-heading">
          <h4>En esta Evaluación mediremos tu conocimientos</h4>
          <h6>Esfuerzate y así ganarás muchos puntos</h6>
          <img src={cabezarobot} id="cabezarobot" alt="robot" />
          <form onSubmit ={this.onClickSubmit}>
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
                <button className="button is-primary" required>Enviar</button>
              </div>
            </section>
          </form>
        </div>
        </Layout>
      </div>
    );
  }
}
