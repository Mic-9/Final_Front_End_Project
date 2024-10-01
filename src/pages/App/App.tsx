import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";
import "./App.css";
import Temp from "../Temp/Temp";
import Co2 from "../Co2/Co2";
import Ch4 from "../Ch4/Ch4";
import N2o from "../N2o/N2o";
import Ice from "../Ice/Ice";
import Ocean from "../Ocean/Ocean";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Temp" element={<Temp />}></Route>
        <Route path="/Co2" element={<Co2 />}></Route>
        <Route path="/Ch4" element={<Ch4 />}></Route>
        <Route path="/N2o" element={<N2o />}></Route>
        <Route path="/Ice" element={<Ice />}></Route>
        <Route path="/Ocean" element={<Ocean />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
