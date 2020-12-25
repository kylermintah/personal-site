import React from "react";


function CardInfo(props) {

    return (
        <div className="k-card-info" >
            <h1 className='k-card-title'>{props.title}</h1>
            <p className='k-card-subtitle'>{props.subtitle}</p>
        </div>
    )
}

export default CardInfo;