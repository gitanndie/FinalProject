import React, { Component } from 'react'
import Footer from '../../Shared/Footer'
import Awardbody from './Awardbody'
import Awardnav from './Awardnav'
export default class Award extends Component {
    render() {
        return (
            <div>
                <Awardnav/>
                <Awardbody/>
                <Footer/>
            </div>
        )
    }
}
