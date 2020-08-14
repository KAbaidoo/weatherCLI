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
        console.log(data);
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