import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/toggle.css";

const Navbar = (props) => {
  const buttonRef = useRef(null);

  const handleToggle = () => {
    if (
      buttonRef.current.className === "navbar-toggler" &&
      buttonRef.current.ariaExpanded === "true"
    ) {
      buttonRef.current.click();
    }
  };
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-black"
        style={{
          borderBottom: "1px solid",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TopTier News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="#mobileNavButton"
            ref={buttonRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/business"
                  onClick={handleToggle}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  onClick={handleToggle}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" onClick={handleToggle}>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" onClick={handleToggle}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" onClick={handleToggle}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" onClick={handleToggle}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  onClick={handleToggle}
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="container--toggle">
              <input
                aria-label=""
                role="switch"
                type="checkbox"
                id="toggle"
                className="toggle--checkbox"
                onClick={props.toggleMode}
                checked={props.active}
                readOnly
              />
              <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
