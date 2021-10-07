import React from 'react';
import {Link} from "react-router-dom";

/**
 * COMPOSANT NOROUTE alias 404
 * Cette page s'achiche pour chaque route Existente
 */
class Noroute extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="noroute">
                    <div className="noroute-box">
                        <p className="noroute-title">404</p>
                        <p className="noroute-text">Oups! La page que vous demandez n'existe pas.</p>
                        <Link className="noroute-text link" to="/">Retourner sur la page d’accueil</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Noroute;