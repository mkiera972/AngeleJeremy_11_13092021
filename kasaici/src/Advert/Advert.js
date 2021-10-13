import React from 'react';
import data from "../data/data";
import Collapsibles from '../Collapsibles/collapsibles';

/**
 * COMPOSANT ADVERT
 * Cette classe affiche les données de la location courante
 * Récupération des données de la location via des données JSON grâce son ID
 * Gestion d'un slideshow pour les images de la location
 * Gestion des collapsibles pour la description de la location
 */
class Advert extends React.Component {

constructor(props){
    super(props);
    this.slideIndex = 1;
    this.state = {
        data : []
    };
}   
    /**
     * Récuperation des données
     */
    getCurrentDataAdvert(){
        let id = this.props.match.params.id;
        let currentDataLocation = data.filter(location => location.id === id);
        if(currentDataLocation.length > 0){
            this.setState({
                data: currentDataLocation
            });
        
        }
    }
   
    // SUIVANT/PRECEDENT CONTROLS
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    // AFFICHAGE DE L'IMAGE COURANTE
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    /**
     * Génération des étoiles d'avis.
     * @param {*} rating note d'avis
     * @returns html 
     */
    genRating(rating){

        let renderRatin = "";
        switch(rating) {
            case "0":
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    </div>;
                break;
            case "1":
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    </div>;
                break;
            case "2":
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    </div>;
                break;    
            case "3":
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    </div>;
                break;   
            case "4":
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star none" ></i>
                    </div>;
                break; 
            case "5":
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    </div>;
                break;         
            default:
                renderRatin = <div className="informations-rating">
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    <i className="fa fa-star none" ></i>
                    </div>;
                break;
        }

        return renderRatin;

    }

    /**
     * Affichage du slide
     * @param {*} number index du slide
     */
    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slideshow-mySlides");

        if (n > slides.length){this.slideIndex = 1}
        if (n < 1){this.slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
   
        slides[this.slideIndex-1].style.display = "block";
    }

    /**
     * Initialisation des collaps et des évents
     */
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
        this.getCurrentDataAdvert();
    }

    componentDidUpdate(){
        if(this.state.data.length > 0){   
            this.showSlides(this.slideIndex);
            //this.initCollapsible();
        }
    }

    render() {
        return (
                this.state.data.length > 0 ?
                    <div className="container">
                        <div className="slideshow">
                            {
                                this.state.data[0].pictures.map((item, i) => {
                                const currentKey = i + 1;
                                return  <div key={i} className="slideshow-mySlides fade">
                                            <img src={item}  alt="" className="slideshow-mySlides-img" />
                                            <div className="slideshow-mySlides-number">{currentKey + "/" + this.state.data[0].pictures.length}</div>
                                        </div>})
                            }
                            {
                                this.state.data[0].pictures.length > 1
                                ? 
                                    <React.Fragment>
                                        <span className="prev"  onClick={()=> this.plusSlides(-1)}>&#10094;</span>
                                        <span className="next"  onClick={()=> this.plusSlides(1)}>&#10095;</span>
                                    </React.Fragment> 
                                :
                                    ""
                            }

                        </div>
                        <section className="informations">
                            <div className="informations-localisation">
                                <h1 className="informations-title">{this.state.data[0].title}</h1>
                                <p className="informations-city">{this.state.data[0].location}</p>
                                <div className="informations-tags">
                                    {
                                        this.state.data[0].tags.map((tag, i) => {
                                        return <span key={i} className="informations-tags-item">{tag}</span>})
                                    }
                                </div>  
                            </div>
                            <div className="informations-autor">
                                {
                                    this.genRating(this.state.data[0].rating)
                                }
                                <div className="informations-owner">
                                    <div className="informations-owner-name">
                                      {this.state.data[0].host.name}
                                    </div>
                                    <img className="informations-owner-avatar" alt={this.state.data[0].host.name} src={this.state.data[0].host.picture}/>
                                </div>
                            </div>
                        </section>
                        <section className="collapsibles">
                            <div className="collapsibles-desc">
                                <Collapsibles title="Description" content={this.state.data[0].description} type="text"/>
                            </div>

                            <div className="collapsibles-desc">
                                <Collapsibles title="Équipements" content={this.state.data[0].equipments} type="list"/>
                            </div>                        
                        </section>
                    </div>   
                :
                "" 
            
            
        );
    }
};
export default Advert;