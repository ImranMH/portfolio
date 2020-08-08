import React, { useEffect } from 'react'
// import { dailyCData } from '../api'
import axios from 'axios';

export default function Index() {
    useEffect(() => {
        // dailyCData()

        axios({
            "method": "GET",
            "url": "https://champions-league-live-scores1.p.rapidapi.com/dev/classify",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "champions-league-live-scores1.p.rapidapi.com",
                "x-rapidapi-key": "5e0797bf0fmsh8ed7d26a34597bep1c6af8jsn9b619dff3b20",
                "useQueryString": true
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    return (
        <div>
            <h2>Contact</h2>
            "x-rapidapi-key": "5e0797bf0fmsh8ed7d26a34597bep1c6af8jsn9b619dff3b20",
        </div>
    )
}
