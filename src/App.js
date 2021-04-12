import React from 'react'
import { getWorldData, getWorldDataYesterday } from "./api"

import Cards from "./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import CountryPicker from "./components/CountryPicker/CountryPicker"

import styles from "./App.module.css"
class App extends React.Component {

    state = {
        totalCases: 0,
        totalRecovered: 0,
        totalDeaths: 0,
        newCases: 0,
        newRecovered: 0,
        newDeaths: 0
    }

    async componentDidMount()  {
        const data = await getWorldData();
        const dataY = await getWorldDataYesterday();
    
        this.setState({
            totalCases: data.cases,
            totalRecovered: data.recovered,
            totalDeaths: data.deaths,
            newCases: data.cases - dataY.cases,
            newRecovered: data.recovered - dataY.recovered,
            newDeaths: data.deaths - dataY.deaths
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards state={this.state}/>
                {/* <CountryPicker />
                <Chart /> */}
            </div>
        )
    }
    
}

export default App