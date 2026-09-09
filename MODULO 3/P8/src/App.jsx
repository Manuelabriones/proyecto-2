import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(username) {
    const userData = {
      username
    };

    setUser(userData);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={
            user
              ? <Navigate to="/" />
              : <Login onLogin={login} />
          }
        />

        <Route
          path="/"
          element={
            <Home
              user={user}
              logout={logout}
            />
          }
        />

        <Route
          path="/profile"
          element={
            user
              ? <Profile user={user} logout={logout} />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;