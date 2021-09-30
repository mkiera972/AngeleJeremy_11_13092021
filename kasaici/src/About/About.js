import React from 'react';

class About extends React.Component {

    initCollapsible(){
        let coll = document.getElementsByClassName("collapsible");
        let i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                    if(this.children[0].className === "fa fa-angle-down on"){
                        this.children[0].className="fa fa-angle-down off";
                        this.children[1].className="fa fa-angle-up on";
                    }else{
                        this.children[0].className="fa fa-angle-down on";
                        this.children[1].className="fa fa-angle-up off";
                    }
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight){
                    content.style.maxHeight = null;
                    } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                } 
            });
        }
    }

    componentDidMount(){
        this.initCollapsible();
    }

    render() {
        return (
            <div className="container">
                <div className="banner bannerAbout">
                    <img className="banner-img bannerAbout" alt="" src='/img/about_banner.png'/>
                </div>  
                <section className="about extraMargin">
                    <div className="about-infos">
                        <button className="collapsible">Fiabilité 
                            <i className="fa fa-angle-down on" aria-hidden="true"></i>
                            <i className="fa fa-angle-up off" aria-hidden="true"></i>
                        </button>
                        <div className="content">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                        </div>
                    </div>
                    <div className="about-infos">
                        <button className="collapsible">Respect
                            <i className="fa fa-angle-down on" aria-hidden="true"></i>
                            <i className="fa fa-angle-up off" aria-hidden="true"></i>
                        </button>
                        <div className="content">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className="about-infos">
                        <button className="collapsible">Service
                            <i className="fa fa-angle-down on" aria-hidden="true"></i>
                            <i className="fa fa-angle-up off" aria-hidden="true"></i>
                        </button>
                        <div className="content">
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                        </div>
                    </div>
                    <div className="about-infos">
                        <button className="collapsible">Sécurité
                            <i className="fa fa-angle-down on" aria-hidden="true"></i>
                            <i className="fa fa-angle-up off" aria-hidden="true"></i>
                        </button>
                        <div className="content">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                        </div>
                    </div>
                </section>             
            </div> 
        )
    }
}

export default About;