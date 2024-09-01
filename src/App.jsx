// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./navbar/Home";

import Visual from "./navbar/Visual";
import Read from "./navbar/Read";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flexbox layout with min height */}
        <Navbar />
        
        <main className="flex-grow"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/visualizer" element={<Visual />} />
            <Route path="/readalgo" element={<Read />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;