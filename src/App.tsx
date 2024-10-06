import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project name="Bryan" />} />
      </Routes>
    </div>
  );
}

export default App;
