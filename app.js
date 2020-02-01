const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv


// console.log(argv.direccion);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng)
        return `La temperatura en ${coords.direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo deterinar el clima de ${direccion}`
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)