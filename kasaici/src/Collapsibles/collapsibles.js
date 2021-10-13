import React from 'react';

class Collapsibles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isCollapsibleOpen: false,
        };
    }

    genContent(type, content){
        let contentCollapsible = "";
        switch (type) {
            case "list":
                contentCollapsible =
                    <ul className="collapsibles-equipments-list">
                        {
                            content.map((equipment, i) => {
                            return <li key={i} className="collapsibles-equipments-list-item">{equipment}</li>})
                        }
                    </ul>
                break;
        
            default:
                    contentCollapsible =  <p>{content}</p>;
                break;
        }
        return contentCollapsible;
    }


    onCollapsibleClicked = () => {
        this.setState(prevState => ({
          isCollapsibleOpen: !prevState.isCollapsibleOpen,
        }));
    };

    render() {
        const typeText = this.props.type;
        return (
            <div className="collapsibles-infos">
                <button className={this.state.isCollapsibleOpen ? "collapsible active" : "collapsible"} onClick={()=> this.onCollapsibleClicked()}>
                    {this.props.title}
                    <i className={this.state.isCollapsibleOpen ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                </button>
                <div className="content" style={{maxHeight: this.state.isCollapsibleOpen ? "250px" : "0"}}>
                    {this.genContent(typeText,this.props.content)}
                </div>
            </div> 
        )
    }
}

export default Collapsibles;