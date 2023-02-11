import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import ExpandingCards from "./components/ExpandingCards";
import BlurryLoading from "./components/BlurryLoading";
import logoRight from "./images/main/logo-right.svg";
import "./App.css";
import "animate.css";

function App() {
  return (
    <div id="container">
      <Router>
        <div className="App-top-menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "is-active" : "App-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expanding-cards"
                className={({ isActive }) =>
                  isActive ? "is-active" : "App-link"
                }
              >
                Expanding Cards
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blurry-loading"
                className={({ isActive }) =>
                  isActive ? "is-active" : "App-link"
                }
              >
                Blurry Loading
              </NavLink>
            </li>
          </ul>
          <div className="logo-container">
            <img src={logoRight} className="img-logo" alt="logo" />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/expanding-cards"
            element={<ExpandingCards />}
          ></Route>
          <Route
            exact
            path="/blurry-loading"
            element={<BlurryLoading />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
