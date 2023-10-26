import React from "react";
import "./App.scss";
import "../../styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Cottage from "../Cottage";
import Home from "./Home";

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route path="/" element={<Home />} />
        {/* </Route> */}
        <Route path="/chalet/:cottageId" element={<Cottage />} />
      </Routes>
    </div>
  );
}

export default App;
