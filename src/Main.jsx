import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
  const [joke, setJoke] = useState({});
  const [category, setCategory] = useState('Any');

  useEffect(() => {
    fetchJoke();
  }, [category]);

  const fetchJoke = async () => {
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <h1>JokeAPI stránkos</h1>
      <div className="select-container">
        <select value={category} onChange={handleCategoryChange} className="select-category">
          
          <option value="Miscellaneous">Růzňásky</option>
          <option value="Programming">Programejšn</option>
          <option value="Pun">Slovní hříčečky</option>
          <option value="Spooky">Strašidelné</option>
          <option value="Christmas">Vánoce</option>
        </select>
      </div>
      <div className="joke-text">
        {joke.type === 'single' ? (
          <p>{joke.joke}</p>
        ) : (
          <div>
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
