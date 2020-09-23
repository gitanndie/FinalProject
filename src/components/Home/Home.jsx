import React, { Component } from 'react'
import HomeNav from '../../components/Home/HomeNav'
import HomeNavSearch from './HomeNavSearch'
import HomeBody from "./HomeBody"

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeNavSearch/>
                <HomeNav/>
                <HomeBody/>
            </div>
        )
    }
}