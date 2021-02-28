import React from "react";
import { useSpring, animated } from 'react-spring';

export function CardInfo(props) {

    let style = useSpring({
        opacity: 1, from: { opacity: props.opacity }
    })

    return (
        <animated.div className="k-card-info" style={style}>
            <h1 className='k-card-title'>{props.title}</h1>
            <p className='k-card-subtitle'>{props.subtitle}</p>
        </animated.div>
    )
}

export default CardInfo;