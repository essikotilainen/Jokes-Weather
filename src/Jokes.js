import React, { useState } from 'react';
import Axios from 'axios';

export default function Jokes() {
    const [joke, setJoke] = useState("");
    const [freeWill, setFreeWill] = useState("");

    const getJoke = () => {
        setFreeWill("");
        Axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                console.log(response);
                setJoke(response.data.setup + " ..." + response.data.punchline);
            });
            
    }

    const noJoke = () => {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                console.log(response);
                setJoke(response.data.setup + " ..." + response.data.punchline);
                setFreeWill("Free will is an illusion, here's a joke for you: ");
            });
    };

    return (
        <div className="container">
            <h3>Want to hear a joke?</h3>
            <button className="btn btn-primary" onClick={getJoke}>Yes please!</button>
            <button className="btn btn-danger" onClick={noJoke}>Nope</button>
            <br />
            <p className="freeWill">{freeWill}</p>
            <p className="joke">{joke}</p>
        </div>
    )
}