import React from 'react'

function Gifts (props) {
    return (
        <div>
            <div className="panel-heading columns">
            <div className="column"> 
            <div className="card-content">
                <div className="media-left">
                    <figure className="image is-128x128">
                    <img className="is-rounded" src={props.imagen} />
                    </figure>
                    <h4>{props.puntos}</h4>
                        <button className="button is-primary">Reclama</button>
                </div>
            </div>
            </div> 
            </div>
        </div>
    )
}
export default Gifts;
