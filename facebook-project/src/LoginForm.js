import React, { useState } from "react";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { users } from "./db";

function LoginForm({ handleLogin, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(user);

    if (user && user.email !== email) {
      setAlert("Incorrect email address.");
      return;
    } else if (user && user.password !== password) {
      setAlert("Incorrect password.");
      return;
    } else if (user) {
      navigate("/feed");
    }
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
              name="email"
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
              name="password"
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
          <Button id="Log In" type="submit">
            Log In
          </Button>
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
