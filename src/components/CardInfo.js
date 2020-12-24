import React from "react";
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({

        // opacity: 1, from: { opacity: 0 }
    })

    return (
        <animated.div className="k-card-info" style={style}>
            <h1 className='k-card-title'>{props.title}</h1>
            <p className='k-card-subtitle'>{props.subtitle}</p>
        </animated.div>
    )
}

export default CardInfo;