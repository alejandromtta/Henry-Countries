const axios = require('axios')

async function getCountries() {
    try {

        let data = await axios.get('https://restcountries.eu/rest/v2/all')
        data = data.data

        let dataMap = data.map(data => {
            return {
                name: data.name,
                capital: data.capital,
                id: data.alpha3Code,
                subregion: data.subregion,
                area: data.area + ' km2',
                flag: data.flag,
                population: data.population,
                region: data.region
            }
        })
        return dataMap;
    } catch (err) {
        return err;
    }
}

module.exports = getCountries;