import React, { useState } from "react";
import Login from "./Components/LoginPage/Login";
import Homepage from "./Components/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    if (credentials.username && credentials.password) {
      setLoggedIn(true);
    }
  };

  const handleBack = () => {
    setLoggedIn(false);
  };

  const handleLogout = () => {
    alert("Logout successful");
  };

  return (
    <div>
      {loggedIn ? (
        <Homepage onBack={handleBack} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
