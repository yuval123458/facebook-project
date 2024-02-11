import React, { useState } from "react";
import "./SignUpForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { users } from "./db";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Verpassword, setVerPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [File, setFile] = useState(null);
  const [Alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password != Verpassword) {
      setEmail("");
      setPassword("");
      setVerPassword("");
      setUsername("");
      setFile(null);
      setAlert("password doesn't match, please try again.");
    }
    const userExists = users.map((user) => (users.email = email));

    if (userExists) {
      setEmail("");
      setPassword("");
      setVerPassword("");
      setUsername("");
      setFile(null);
      setAlert("a user with this email already exists in the system.");
    }
    if (Username.length < 8) {
      setEmail("");
      setPassword("");
      setVerPassword("");
      setUsername("");
      setFile(null);
      setAlert("username has to be atleast 8 characters long");
    }
    if (!File) {
      setEmail("");
      setPassword("");
      setVerPassword("");
      setUsername("");
      setFile(null);
      setAlert("please add a profile picture.");
    }
    users.push({ Username, email, password });
    navigate("/login");
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    // setFile(e.target.File[0]);
  };

  const onLoginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="container-flex">
      <div className="login-container">
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
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
          </div>
          <div className="form-group">
            <label htmlFor="verify password">Verify password</label>
            <input
              type="password"
              value={Verpassword}
              onChange={(e) => setVerPassword(e.target.value)}
              placeholder="Verify Password"
              required
            />
            {Alert && <label className="danger">{Alert}</label>}
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              onChange={handleFileChange}
            />
          </div>
          <label className="sign-up-label">
            Already have an account ?{" "}
            <span className="lead" onClick={onLoginHandler}>
              click here
            </span>{" "}
            to log in!
          </label>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
      <div className="welcome-message">
        <h1>FooBar</h1>
        <p>FooBar lets you connect with your loved ones!</p>
      </div>
    </div>
  );
}

export default SignUpForm;
