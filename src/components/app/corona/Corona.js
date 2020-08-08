import React, { Component } from 'react'
import './main.css'
// import Cards from './cards/Cards'
// import CountryPicker from './countryPicker/CountryPicker'
// import Chart from './chart/Chart'
import { Cards, CountryPicker, Chart } from './index'
import { fetchData } from '../../../api'
import corona from '../coronavirus-logo.jpg'

export default class Index extends Component {

    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        // const fetchDaily = await fetchDailyData()
        this.setState({ data: fetchedData })
    }
    handleCountryChange = async (country) => {
        const fetchedCountryData = await fetchData(country)
        this.setState({ data: fetchedCountryData, country: country })
    }
    render() {
        const { data, country } = this.state
        if (!data) {
            return (
                <div className="container">
                    <h2>Unable to fatch data</h2>
                </div>
            )
        }
        return (
            <div className="container">
                {/* <h1> <img className="img" src={corona} alt="logo" /></h1> */}
                <Cards country={country} data={data} />
                <CountryPicker onCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
