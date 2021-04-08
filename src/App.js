import React from 'react';
import { connect } from 'react-redux';
import { fetchRegions } from './actions/regions';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchRegions()
  }
  render(){
  return (
    "hello can you see me "
  );
}
}

export default connect(null, {fetchRegions}) (App);
