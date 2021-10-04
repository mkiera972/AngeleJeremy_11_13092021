import React from 'react';
import { withRouter } from 'react-router-dom';
class Adverts extends React.Component {

    routeChange=(id)=> {
        let path = "/advert/" + id;
        this.props.history.push(path);
    }
    render(){
        const adverts = this.props.adverts;
        const listAdverts = adverts.map((currentLocation, index) =>
            <div className="advert" key={index} onClick={() => {this.routeChange(currentLocation.id)}}>
                <p className="advert-title">{currentLocation.title}</p>
            </div>
        );
        return (
            listAdverts
        );
    }
}

export default withRouter(Adverts);