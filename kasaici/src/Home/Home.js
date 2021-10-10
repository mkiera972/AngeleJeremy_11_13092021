import React from 'react';
import data from "./../data/data";
import Adverts from "../Adverts/Adverts";

/**
 * PAGE ACCUEIL
 */
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="banner">
                    <img className="banner-img" alt="" src='/img/banner.png'/>
                    <p className="banner-title">Chez vous, <span className="banner-title-sub">partout et ailleurs</span></p>
                </div>
                <div className="adverts">
                    <Adverts adverts={data} />
                </div>
            </div> 
        );
    }
}
  
export default Home;