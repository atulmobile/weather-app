const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const token = '2913eb3853f5cf3e9a380f475a1fa73a';

    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    // const url = `https://api.darksky.net/forecast/${token}/${latitude},${longitude}`;
    
    const url = `http://api.weatherstack.com/forecast?access_key=${token}&query=${latitude},${longitude}`;
   
    // console.log(url);
    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, res.body.current.weather_descriptions[0] + ', It is currently ' + res.body.current.temperature + ' degress out. There is a ' + res.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast