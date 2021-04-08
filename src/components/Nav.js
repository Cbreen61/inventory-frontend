import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Regions">Regions</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
