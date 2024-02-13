import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Feed from "./Feed";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    console.log(user);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<LoginForm handleLogin={handleLogin} />}
          />
          <Route
            path="/sign-up"
            element={<SignUpForm handleLogin={handleLogin} />}
          />
          <Route path="/feed" element={<Feed user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
