import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../../../../api'
import { NativeSelect, FormControl } from '@material-ui/core/'
import './CountryPicker.module.css'


export default function CountryPicker({ onCountryChange }) {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const fetchCountry = async () => {
            setCountries(await fetchCountries())

        }
        fetchCountry()
    }, [setCountries]);


    return (
        <div className="container county_picker">
            <FormControl className="control">

                <NativeSelect defaultValue="" onChange={(e) => { onCountryChange(e.target.value) }}>
                    <option defaultValue="" >Worldwide</option>
                    {countries.map(country => (
                        <option value={country} key={country}>{country}</option>
                    ))}
                </NativeSelect>

            </FormControl>
        </div>
    )
}
