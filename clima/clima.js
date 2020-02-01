// api.openweathermap.org / data / 2.5 / weather ? lat = 35 & lon = 139 & appid = 31791 f68fedafec33fa4f698d67d61d0 & units = metric

const axios = require('axios');
const _APIKEY = '31791f68fedafec33fa4f698d67d61d0'
const units = 'metric'
const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${_APIKEY}&units=${units}`)
    return resp.data.main.temp
}

module.exports = { getClima }