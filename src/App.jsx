import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="bg-gray-200 w-full h-screen flex flex-col">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/:id" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;