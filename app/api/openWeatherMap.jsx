var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=c54043fef86c837a632d078514c01bd7';
//c54043fef86c837a632d078514c01bd7
module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err){
      throw new Error('Unable to fetch weather for that location.');
  });
  }
}
