'esversion: 6';
const fetch = require('node-fetch');
const API_KEY = 'a8e19a67de0d4680a6dd1d1db20b4408';

// fetch current weather condition for specified city
const current = async (city) => {
    try {
        let response = await fetch(
            `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
        );
        let data = await response.json();


        let c = {
            city: data.location.name,
            localtime: data.location.localtime,
            country: data.location.country,
            localtime: data.location.localtime,
            description: data.current.weather_descriptions,
            temperature: data.current.temperature

        };
        //  output weather information on to console
        let condition = '';
        c.description.forEach(element => {
            condition += element + ', ';
        });
        console.log(`The current weather in ${c.city}, ${c.country} : ${condition}.\nTemperature : ${c.temperature} °C. \n(local time : ${c.localtime})`);


    } catch (e) {
        console.log("Error : ", e.message);
    }
};

// fetch weather forcast for specified city
const forcast = async (city) => {
    try {
        let response = await fetch(
            `http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${city}`
        );
        let data = await response.json();
        console.log(data);
    } catch (e) {
        console.log("Error : ", e.message);
    }
};

module.exports = {
    current,
    forcast
};