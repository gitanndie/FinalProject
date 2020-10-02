import React, { Component } from 'react'
import Profilebody from './Profilebody'
import { withRouter } from "react-router-dom"
import Profilefooter from '../../Components/Profile/Profilefooter'
import Profilenav from '../../Components/Profile/Profilenav'

class Profile extends Component {
    state = {
        userData: {},
        user: '',
        degree: ''
    }
    componentDidMount() {
        const user = localStorage.getItem("user")
        this.setState({ user: user ? user : '' });
        fetch("https://json-server-now.kira4489.vercel.app/users")
        .then((response) => response.json())
        .then((data) => {
            data.map(datauser => {
                if(datauser.user === user) {
                    console.log(datauser);
                    this.setState({ userData: datauser})
                    this.setState({ degree: datauser.degree })
                }
            })
        });
        }
    close = () => {
        localStorage.removeItem("auth");
        this.props.history.replace("/")
    }
    render() {
        return (
            <div>
                <Profilenav degree={this.state.degree}  user={this.state.user} close={this.close}/>
                <Profilebody/>
                <Profilefooter/>
            </div>
        )
    }
}
export default withRouter(Profile);