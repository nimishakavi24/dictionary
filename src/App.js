import React, { useState } from 'react';

const XDictionary = () => {
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSearch = () => {
    const result = initialDictionary.find(entry =>
      entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (result) {
      setSearchResult(result.meaning);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setIsButtonDisabled(event.target.value === '');
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter a word..."
      />
      <button onClick={handleSearch} disabled={isButtonDisabled}>Search</button>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
};

export default XDictionary;
