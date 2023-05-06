import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Homecontent from "./components/homecontent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homecontent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
