import React from 'react'
import classes from "./Card.module.css"
import Count from "react-countup"

const Card = (props) => {
    let cardBackColor;
    if(props.color === "yellow") {
        cardBackColor = classes.yellow;
    } else if(props.color === "red") {
        cardBackColor = classes.red;
    } else {
        cardBackColor = classes.green
    }
    return (
        <div className={`${classes.card} ${cardBackColor}`}>
            <h3 className={classes.cardName}>{props.cardName}</h3>
            <p className={classes.count}>
                <Count start={1000000} end={props.count} duration={1.5} separator=","/>
            </p>
            <p className={classes.todayCount}>+
                <Count start={0} end={props.todayCount} duration={1.5} separator=","/>
            </p>
        </div>
    )
}

export default Card
