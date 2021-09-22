import React from 'react';
import data from "./../data/data";
import Locations from "./../Locations/Locations";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="banner">
                    <img className="banner-img" alt="" src='/img/banner.png'/>
                    <p className="banner-title">Chez vous, partout et ailleurs</p>
                </div>
                <div className="locations">
                    <Locations locations={data} />
                </div>
            </div>
    
        );
    }
}
  
export default Home;