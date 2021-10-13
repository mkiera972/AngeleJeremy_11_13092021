import React from 'react';
import Collapsibles from '../Collapsibles/collapsibles';

/**
 * COMPOSANT ABOUT
 * AFFICHE LA PAGE ABOUT
 * GESTION DES COLLAPSIBLES DE LA PAGE
 */
class About extends React.Component {
    render() {
        const contentFiab = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        const contentResp = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        const contentServ = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        const contentSecu = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

        return (
            <div className="container">
                <div className="banner bannerAbout">
                    <img className="banner-img bannerAbout" alt="" src='/img/about_banner.png'/>
                </div>  
                <section className="collapsibles extraMargin noflex">
                    <Collapsibles title="Fiabilité" content={contentFiab} type="text"/>
                    <Collapsibles title="Respect" content={contentResp} type="text"/>
                    <Collapsibles title="Service" content={contentServ} type="text"/>
                    <Collapsibles title="Sécurité" content={contentSecu} type="text"/>
                </section>             
            </div> 
        )
    }
}

export default About;