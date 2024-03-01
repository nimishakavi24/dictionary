import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [meaning, setMeaning] = useState("");
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const wordMeaning = dictionary.find(entry =>
      entry.word.toLowerCase() === (search.toLowerCase())
    );
    const foundMeaning = wordMeaning ? wordMeaning.meaning : "Word not found in the dictionary.";
    setMeaning(foundMeaning);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <strong>Definition:</strong>
        <div>{meaning}</div>
      </div>
    </div>
  );
}

export default App;