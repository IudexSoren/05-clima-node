const axios = require('axios');

const getClimaByCoords = async (lat, lon) => {
  const apiKey = '195aadafe2b7ff18e5653324debf0eba';

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
  if (resp.cod === 400) throw new Error(`Error en las coordenadas. Mensaje: ${ resp.message }`);

  return resp.data.main.temp;
}

module.exports = {
  getClimaByCoords
}