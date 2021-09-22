import React from 'react';
import { withRouter } from 'react-router-dom';
class Locations extends React.Component {

    routeChange=(id)=> {
        let path = "/location/" + id;
        this.props.history.push(path);
    }
    render(){
        const locations = this.props.locations;
        const listLocations = locations.map((currentLocation, index) =>
            <div className="location" key={index} onClick={() => {this.routeChange(currentLocation.id)}}>
                <p className="location-title">{currentLocation.title}</p>
            </div>
        );
        return (
            listLocations
        );
    }
}

export default withRouter(Locations);