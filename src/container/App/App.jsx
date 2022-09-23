import "./App.scss";
import "../../styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { getEntities } from "../../helpers/entity";
import Navbar from "../Navbar/Navbar";
import Cottage from "../Cottage";
import Home from "./Home";

function App() {

  getEntities('chalets?populate=*');

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chalet/:cottageId" element={<Cottage />} />
      </Routes>
    </div>
  );
}

export default App;
