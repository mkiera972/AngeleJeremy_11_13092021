import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Advert from './Advert/Advert';
import Noroute from './404/404'
import Footer from './Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
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
