import axios from 'axios'

const coronaUrl = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    try {
        let changeableUrl = coronaUrl
        if (country) {
            changeableUrl = `${coronaUrl}/countries/${country}`
        }

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)
        // console.log(response);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${coronaUrl}/daily`)

        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            date: dailyData.reportDate
        }))
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${coronaUrl}/countries`)
        return countries.map(country => country.name)
    } catch (error) {
        console.log(error);
    }
}

// export const dailyCData = async () => {
//     try {
//         // const { data } = await axios.get('https://covid19.mathdro.id/api/daily/7-22-2020')
//         // console.log(data);
//         const busket = []
//         // data.map(daily => {
//         //     if (daily.countryRegion === "Bangladesh") {
//         //         busket.push(daily)

//         //     }
//         //     return busket
//         // })

//         // console.log(busket);
//     } catch (error) {
//         console.log(error)
//     }
// }

export const fetchLoveData = async (person, pertner) => {
    let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=trump&sname=melania`
    if (person && pertner) {
        url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${person}&sname=${pertner}`
    }

    const result = await axios({
        method: 'get',
        headers: {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "5e0797bf0fmsh8ed7d26a34597bep1c6af8jsn9b619dff3b20"
        },
        url: url,
        // data: {
        //   firstName: 'Fred',
        //   lastName: 'Flintstone'
        // }
    })
    return result.data
}