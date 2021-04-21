import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import getJoke from '../Helpers/Data/jokeData';

function App() {
  const [showJoke, setShowJoke] = useState();
  const [showPunchline, setShowPunchline] = useState(false);

  const getAnotherJoke = () => {
    getJoke()
      .then((jokes) => {
        setShowJoke(jokes);
      });
  };

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      getAnotherJoke();
    } else {
      showPunchline(true);
    }
  };

  useEffect(() => {
    getAnotherJoke();
  }, []);

  console.warn(showJoke);

  return (
    <div className="App">
      <h1>Wanna hear a joke?</h1>
      <h2>{showJoke?.setup}</h2>
      <p>{showPunchline && showJoke?.punchline}</p>
      <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get Another Joke?' : 'Get Punchline'}
      </Button>
    </div>
  );
}

export default App;
