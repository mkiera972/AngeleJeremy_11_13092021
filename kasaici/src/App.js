import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './Home/Home';
import Location from './Location/Location';
import Footer from './Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/location/:id" component={Location}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
