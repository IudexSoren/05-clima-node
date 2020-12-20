const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {
  const encodedPlace = encodeURI(direccion),
        access_token = 'pk.eyJ1IjoiaXVkZXhzb3JlbiIsImEiOiJja2l3NnpuaGQwNjVxMnVuNmh2a3ZvZnY2In0.oUgq-Mc9hd1DNMFQZkUHNg';
  const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedPlace}.json?access_token=${access_token}`
  });

  const resp = await instance.get();
  if ( resp.data.features.length === 0 ) throw new Error(`No se han encontrado resultados para ${direccion}`);

  const data = resp.data.features,
        ciudad = data[0],
        address = ciudad.place_name,
        lat = ciudad.center[0],
        lon = ciudad.center[1];

  return {
    address,
    lat,
    lon
  }
}

module.exports = {
  getLugarLatLng
}