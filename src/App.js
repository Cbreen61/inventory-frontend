import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchRegions } from './actions/regions';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Index from './components/Index';
import ErrorPage from "./components/Error";

class App extends React.Component {

    componentDidMount(){
      this.props.fetchRegions();
    }

  render(){
    if (this.props.loading){
      return (
        <h3>Loading...</h3>
      )
    }

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/regions" component={ Index } />
        <Route component={ ErrorPage } />
      </Switch>
      <Footer />
    </Router>
  );
}
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchRegions })(App);
