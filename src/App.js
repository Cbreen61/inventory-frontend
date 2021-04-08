import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Index from './components/Index';
import ErrorPage from "./components/Error";

class App extends React.Component {
  render(){
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

export default App ;
