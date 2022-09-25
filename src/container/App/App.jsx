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
