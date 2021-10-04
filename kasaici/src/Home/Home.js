import React from 'react';
import data from "./../data/data";
import Adverts from "../Adverts/Adverts";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="banner">
                    <img className="banner-img" alt="" src='/img/banner.png'/>
                    <p className="banner-title">Chez vous, partout et ailleurs</p>
                </div>
                <div className="adverts">
                    <Adverts adverts={data} />
                </div>
            </div> 
        );
    }
}
  
export default Home;