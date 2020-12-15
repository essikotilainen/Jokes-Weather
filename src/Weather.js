import React, { useState } from 'react';
import Axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'baac7151d397cb72474d8db827900fd1';

export default function Clock() {
    const [temp, setTemp] = useState();
    const [icon, setIcon] = useState();
    const iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'

    const getWeather = () => {
        Axios.get("https://api.openweathermap.org/data/2.5/weather?q=Kuopio&appid=baac7151d397cb72474d8db827900fd1&units=metric")
            .then(
                (response) => {
                    console.log(response);
                    setTemp("Temperature: " + response.data.main.temp);
                    setIcon(response.data.weather[0].icon);

                });
    }

    return (
        <div className="container">
            <h3>Weather in Kuopio?</h3>
            <button className="btn btn-success" onClick={getWeather}>Yup!</button>
            <br />
            <p className="temp">{temp}</p>
            <img src={iconUrl} />
        </div>
    )
}