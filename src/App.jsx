import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import TanyaAi from "./pages/TanyaAi";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tanyaai" element={<TanyaAi />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
