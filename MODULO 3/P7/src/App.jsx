import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Citas from "./pages/Citas";
import CitaDetalle from "./pages/CitaDetalle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2>🩺 MediCitas</h2>

        <div className="links">
          <Link to="/">Inicio</Link>
          <Link to="/citas">Ver citas</Link>
        </div>

      </nav>

      <main className="container">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/citas"
            element={<Citas />}
          />

          <Route
            path="/cita/:id"
            element={<CitaDetalle />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;