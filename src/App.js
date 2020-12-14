import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function  App() {

   const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
      console.log(response);
      setJoke(response.data.setup + "..." + response.data.punchline);
    });
  }

  return <div>Hello Youtube
    <button onClick={getJoke}>get joke</button>
    {joke}
  </div>
}

export default App;
