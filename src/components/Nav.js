import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        APNA DOOKAN
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categories">
              Categary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/account">
              Account
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/sign_up">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
