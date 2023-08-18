import "./Login.css";
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
  
    setLoggedIn(true);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            
          />
        </div>
        <button onClick={ ()=> 
        {if(password==="") 
        {return alert("Password is Missing")}
        else if(email===""){return  alert("email is Missing")}
        else if(password.length<5){return  alert("Password is too short")}
        else {return handleLogin()}}} 
        className="btn btn-primary">Login</button>
        {loggedIn && <p className="success-message">You are successfully logged in!</p>}
      </div>
    </div>
  );
};

export default Login;
