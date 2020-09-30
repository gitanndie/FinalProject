import React from "react";
import swal from "sweetalert";

function Gifts(props) {
  const miComponente = () => {
    swal({
      title: "estas seguro?",
      text: "una vez, comprado no se puede volver a retroceder",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("oh! compra exitosa", {
          icon: "success",
        });
      } else {
        swal("No ha comprado nada");
      }
    });
  };

const prueba = () =>{
  if(1500>=0 ){
   console.log("puedes reclamarlo")
  }else{
  console.log("no tienes suficientes puntos")
  }
  prueba()
}

  return (
    <div>
      <div className="panel-heading columns">
        <div className="column">
          <div className="card-content">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={props.imagen} />
              </figure>
              <h4>{props.puntos}</h4>
              <button className="button is-primary" onClick={miComponente}>
                Reclama
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gifts;
