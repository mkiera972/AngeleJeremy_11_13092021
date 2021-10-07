import React from 'react';
import { withRouter } from 'react-router-dom';
/**
 * COMPOSANTS ADVERTS
 * Liste toutes les annonces sur la page d'accueil
 * PARAMS data avec liste des annonces
 * RETURN une liste d'annonce en html
 */
class Adverts extends React.Component {

    routeChange=(id)=> {
        let path = "/advert/" + id;
        this.props.history.push(path);
    }
    render(){
        const adverts = this.props.adverts;
        const listAdverts = adverts.map((currentAdvert, index) =>
            <div className="advert" key={index} onClick={() => {this.routeChange(currentAdvert.id)}}>
                <p className="advert-title">{currentAdvert.title}</p>
            </div>
        );
        return (
            listAdverts
        );
    }
}

export default withRouter(Adverts);