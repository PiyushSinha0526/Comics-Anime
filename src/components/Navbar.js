import React from "react";
// css
import './css/Navbar.css'
// from npm package
import { Link } from "react-router-dom";
export default function Navbar() {
    const getSearchTerm = () => {

    }
  return (
      <div className="navbar">
        <div className="navbar__logo">
            <Link to="/">Anima</Link>
        </div>
        <div className="navbar__right-aligned-links">
          <ul className="navbar__links">
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/manga">Manga</Link></li>
          </ul>
          <input
            className="navbar_search"
            type="text"
            placeholder="Search..."
            // value={"Nothing"}
            onChange={(e) => getSearchTerm(e.target.value)}
          />
        </div>
      </div>
  );
}
