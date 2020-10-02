import React, { Component } from 'react'
import './Award.css'
/* import Bulma from '@vizuaalog/bulmajs'; */
/* import Notification from 'react-bulma-notification'; */
/* import 'react-bulma-notification/css/index.css'; */

import Gifts from './Gifts'

export default class Awardbody extends Component {
    render() {
        return (
            <div>
                <h1 id="h1">Elige tu premio</h1>
                <div className="panel-heading">
                <div className="card-content">
                    <div className="media" id="prod">
                    <div className="media">
                        {this.props.gifts.map((gift, index) => {
                return <Gifts key={index} puntos={gift.puntos} imagen={gift.imagen} restar={this.props.restar} />
                })} 
                    </div>
                    </div>
                </div>
                </div>
                <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
                    <a className="pagination-previous" href="!#">Previous</a>
                    <a className="pagination-next" href="!#">Next page</a>
                </nav>
            </div>
            
        )
    }
}
