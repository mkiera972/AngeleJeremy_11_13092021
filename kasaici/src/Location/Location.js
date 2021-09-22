import React from 'react';
import data from "./../data/data";


class Location extends React.Component {

constructor(props){
    super(props);
    this.slideIndex = 1;
    this.state = {
        data : []
    
    };
}
getCurrentDataAdvert(){
    let id = this.props.match.params.id;
    let currentDataLocation = data.filter(location => location.id === id);
    if(currentDataLocation.length > 0){
        this.setState({
            data: currentDataLocation
        });
       
    }
    
   
}
   
    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    Slides(){

    }

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

    componentDidMount(){
        this.getCurrentDataAdvert();
    }

    componentDidUpdate(){
        if(this.state.data.length > 0){   
            this.showSlides(this.slideIndex);
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
                                            <img src={item}  className="slideshow-mySlides-img" />
                                            <div className="slideshow-mySlides-number">{currentKey + "/" + this.state.data[0].pictures.length}</div>
                                        </div>})
                            }
                            <a className="prev" onClick={()=> this.plusSlides(-1)}>&#10094;</a>
                            <a className="next" onClick={()=> this.plusSlides(1)}>&#10095;</a>
                        </div>
                        <section className="informations">
                            <div className="informations-localisation">
                                <h1 className="informations-title">Paris center, on the romantic Canal Saint-Martin</h1>
                                <p className="informations-city">Paris, Île-de-France</p>
                                <div className="informations-tags">
                                    <span className="informations-tags-item">Cozy</span>
                                    <span className="informations-tags-item">Canal</span>
                                    <span className="informations-tags-item">Paris 10</span>
                                </div>
                            </div>
                            <div className="informations-autor">

                            </div>
                        </section>
                    </div>   
                :
                "" 
            
            
        );
    }
};
export default Location;