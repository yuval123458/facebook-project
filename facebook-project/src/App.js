import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Feed from "./Feed";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const handleSignUp = (user) => {
    setUser(user);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm user={user} />} />
          <Route
            path="/sign-up"
            element={<SignUpForm handleSignUp={handleSignUp} />}
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute user={user}>
                <Feed user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
