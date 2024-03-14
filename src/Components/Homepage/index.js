import React, { useEffect, useState } from "react";
import "./Homepage.css";

const Homepage = ({ onBack, onLogout }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch jokes");
      }
      const data = await response.json();
      setJokes(data.jokes || []);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="homepage-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Jokes</h2>
        <button className="btn logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke) => (
              <tr key={joke.id}>
                <td>{joke.id}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Homepage;
