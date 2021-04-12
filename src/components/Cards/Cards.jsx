import React from 'react';
import Card from "./Card/Card"

const Cards = (props) => {
    console.log(props);
    return (
        <>
            <Card count={props.state.totalCases} todayCount={props.state.newCases} cardName="Total Cases" color="yellow"/>
            <Card count={props.state.totalRecovered} todayCount={props.state.newRecovered} cardName="Total Recovered" color="green"/>
            <Card count={props.state.totalDeaths} todayCount={props.state.newDeaths} cardName="Total Deaths" color="red"/>
        </>
    )
}

export default Cards
