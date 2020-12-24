import React from 'react';
import CardInfo from './CardInfo';


function Card(props) {

    return (
        <div>
            <div className="d-inline-block k-card " style={{ marginTop: '5%', }} onMouseOver={(e) => props.onHover(props.item)} onTouchStartCapture={(e) => props.onHover(props.item)} >

                <a className="k-link " href={props.item.link} target="_blank" rel="noreferrer">

                    <div className="k-card-background inner-shadow" style={{ backgroundImage: `url(${props.item.image})`, }}>

                    </div>
                    {/* <img className = 'k-card-image' src={props.item.image} alt={props.item.image} unselectable="on"/> */}
                </a>
            </div>
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} />}
        </div>

    );

}

export default Card;