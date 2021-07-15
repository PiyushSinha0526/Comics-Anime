import React, { useState, useRef } from "react";
// css
import "./css/Navbar.css";
// from npm package
import { Link } from "react-router-dom";

export default function Navbar() {
  const [term, setTerm] = useState("");
  const [whatType, setWhatType] = useState('anime');
  const typeObj = ['anime', 'manga']
  const inputRef = useRef();
  const clickHandler = () => {
    setTerm(inputRef.current.value);
    inputRef.current.value = ''
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">Manime</Link>
      </div>
      <div className="navbar__right-aligned-links">
        <ul className="navbar__links">
          <li>
            <Link to="/anime">Anime</Link>
          </li>
          <li>
            <Link to="/manga">Manga</Link>
          </li>
        </ul>
        </div>
          <div className="search__wrap">
          <select
              className="navbar_custom-select"
              value={whatType || "anime"}
              onChange={(e) => {
                setWhatType(e.target.value);
              }}
            >
              {typeObj.map((O) => {
                return (
                  <option key={O} value={O}>
                    {O}
                  </option>
                );
              })}
            </select>
            <input
              className="navbar_search"
              type="text"
              placeholder="Search..."
              ref={inputRef}
              onChange={(e) => setTerm(e.target.value)}
            />
            <Link className="searchIcon" to={`/search/${whatType}/${term}`} onClick={clickHandler}>
            &#9898;
            </Link>
          </div>
    </div>
  );
}
