const axios = require('axios');
const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': 'd55fea052bmsh231eff0462e4f55p14ea14jsna1525e34efb8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No har resultados para ${dir}`)
    }
    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon
    return {
        direccion,
        lat,
        lng

    }
}

module.exports = {
    getLugarLatLng
}