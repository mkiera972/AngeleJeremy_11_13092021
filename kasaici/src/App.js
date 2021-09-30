import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Advert from './Advert/Advert';
import Noroute from './404/404'
import Footer from './Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/advert/:id" component={Advert}/>
            <Route path="*" component={Noroute}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
