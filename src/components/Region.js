import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Region extends Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                <ul>
                    <li><Link to="/accounts">{ name }</Link></li>

                </ul>
            </div>
        )
    }
}

export default Region
