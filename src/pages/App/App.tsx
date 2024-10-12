import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useApi from "../../components/ClientApi/clientApi";
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
  const { temperature, co2, ch4, n2o, ice, ocean } = useApi();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Temp" element={<Temp data={temperature} />}></Route>
        <Route path="/Co2" element={<Co2 data={co2} />}></Route>
        <Route path="/Ch4" element={<Ch4 data={ch4} />}></Route>
        <Route path="/N2o" element={<N2o data={n2o} />}></Route>
        <Route path="/Ice" element={<Ice data={ice} />}></Route>
        <Route path="/Ocean" element={<Ocean data={ocean} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
