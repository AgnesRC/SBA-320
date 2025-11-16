import React from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FavoritesPage from "./pages/FavoritesPage";


export default function App() {
  return (
    <>
      <nav className="navbar">
        <h2> Recipe Site</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

    </>
  );
}
