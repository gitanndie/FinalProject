import React, { Component } from 'react'
import Profilebody from './Profilebody'
import Profilefooter from '../../Components/Profile/Profilefooter'
import Profilenav from '../../Components/Profile/Profilenav'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Profilenav/>
                <Profilebody/>
                <Profilefooter/>
            </div>
        )
    }
}
