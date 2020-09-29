import React from "react";
import swal from "sweetalert";

function Gifts(props) {
  const miComponente = () => {
    swal("estas seguro que quieres comprarlo?", {
      buttons: ["Si", "No"],
    });
  };

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
