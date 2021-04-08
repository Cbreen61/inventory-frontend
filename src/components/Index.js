import React, { Component } from 'react'
import { connect } from 'react-redux';
import Region from './Region';

class Index extends Component {
    render() {
        const regions = this.props.regions.map( (region, i) => <Region key={i} name={ region.name} />)
        return (
            <div>
                { regions }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        regions: state.regions
    }
}

export default connect(mapStateToProps)(Index);
