import React, { useState } from "react";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { users } from "./db";

function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = user.map((user) => user.email == email);

    if (!user) {
      setAlert("Incorrect email address.");
    }
    if (user.password !== password) {
      setAlert("Incorrect password.");
    }
    const newUser = { email, password };
    handleLogin(newUser);
    navigate("/feed");
  };

  const signUpHandler = () => {
    navigate("/sign-up");
  };

  return (
    <div className="container-flex">
      <div className="login-container">
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {Alert && <label className="danger">{Alert}</label>}
            <label className="sign-up-label">
              doesn't have an account yet?
              <span onClick={signUpHandler} className="lead">
                {" "}
                click here
              </span>{" "}
              to create one!
            </label>
          </div>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
      <div className="welcome-message">
        <h1>FooBar</h1>
        <p>FooBar lets you connect with your loved ones!</p>
      </div>
    </div>
  );
}

export default LoginForm;
