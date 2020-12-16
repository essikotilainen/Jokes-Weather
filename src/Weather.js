import React, { useState } from 'react';
import Axios from 'axios';

// Kuopio esim. url:
// "https://api.openweathermap.org/data/2.5/weather?q=Kuopio&appid=baac7151d397cb72474d8db827900fd1&units=metric"

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=baac7151d397cb72474d8db827900fd1';
const metric = "&units=metric";

export default function Clock() {
    const [temp, setTemp] = useState();
    const [icon, setIcon] = useState();
    const iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
    const [city, setCity] = useState();

    const getWeather = () => {

        Axios.get(apiUrl + city + API_KEY + metric)
            .then(
                (response) => {
                    console.log(response);
                    setTemp("Temperature: " + response.data.main.temp);
                    setIcon(response.data.weather[0].icon);
                    console.log(city);
                });
    }

    return (
        <div className="container">
            <h3>Get current weather <span className="fas fa-temperature-low"></span></h3>
            <form>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control col-6" id="cityName" value={city}
                        onChange={e => setCity(e.target.value)} placeholder="Enter city name"></input>
                </div>
            </form>
            <button className="btn btn-success" onClick={getWeather}>&rarr;</button>
            <br />
            <p className="temp">{temp}</p>
            <img src={iconUrl} />
        </div>
    )
}