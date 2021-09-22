
import React, { Component } from 'react';
export default class UserLogout extends Component {

    logout = () => {
        localStorage.clear();
        localStorage.removeItem('Token');
        window.location.href = "/";
    }

    render() {
        return (
            <button onClick={this.logout}>Logout</button>
        )
    }
}
