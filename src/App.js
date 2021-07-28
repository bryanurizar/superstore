import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </React.StrictMode>
  );
}

export default App;
