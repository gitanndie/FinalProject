import React, { Component } from 'react'
import HomeNav from './HomeNav'

import HomeNavSearch from './HomeNavSearch'
import HomeBody from "./HomeBody"
import HomeFooter from './HomeFooter'

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeNavSearch/>
                <HomeNav/>
                <HomeBody/>
                <HomeFooter/>
            </div>
        )
    }
}