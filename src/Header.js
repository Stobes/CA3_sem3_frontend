import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"

export default function RoutComponent() {
    return (
        <Router>
            <div>
                <ul className="Header">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr />

                <Routes>
                    <Route exact path="/Home" element={<Home />}>
                    
                    </Route>
                    <Route exact path="/about" element={<About />}>
                  
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
