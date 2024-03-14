import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleLogin = () => {
    if (username && password) {
      onLogin({ username, password });
    } else {
      alert("Please enter valid credentials");
    }
  };

  const handleSignup = () => {
    alert("Redirect to Signup page");
  };

  return (
    <animated.div style={springProps} className="container mt-5">
      <h2>Login</h2>
      <form className="d-grid gap-2">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username<span className="required">*</span>:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password<span className="required">*</span>:
          </label>
          <div className="password-input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button
          type="button"
          className="btn btn-secondary mt-2"
          onClick={handleSignup}
        >
          Signup
        </button>
      </form>
      <div className="pt-4">
        <p>Note*:</p>
        <p>Username: India1947</p>
        <p>Password: 123456789</p>
      </div>
    </animated.div>
  );
};

export default Login;
