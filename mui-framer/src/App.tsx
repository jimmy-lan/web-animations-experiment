import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { InitialTransition } from "./InitialTransition";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <InitialTransition />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
