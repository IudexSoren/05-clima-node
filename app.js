const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad',
    demand: true
  }
}).argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClimaByCoords } = require('./clima/clima');

// getLugarLatLng(argv.direccion)
// .then(console.log);

// getClimaByCoords(-84.08333, 9.93333)
// .then(console.log)
// .catch(console.log);

const getInfo = async (direccion) => {
  try {
    const lugar = await getLugarLatLng(argv.direccion);
    const clima = await getClimaByCoords(lugar.lat, lugar.lon);
    return `El clima en ${ lugar.address } es de ${ clima }°`;
  } catch (err) {
    return `No se pudo determinar el clima de ${direccion.address}`
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);