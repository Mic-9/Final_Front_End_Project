import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main">
      <div className="link-container">
        <Link to="/Temp" className="link">
          <h3>Global Temperature</h3>
        </Link>
        <Link to="/Co2" className="link">
          <h3>
            Carbon Dioxide (CO<sub>2</sub>)
          </h3>
        </Link>
        <Link to="/Ch4" className="link">
          <h3>
            Methane (CH<sub>4</sub>)
          </h3>
        </Link>
        <Link to="/N2o" className="link">
          <h3>
            Nitrous Oxide (N<sub>2</sub>O)
          </h3>
        </Link>
        <Link to="/Ice" className="link">
          <h3>Artic Ice</h3>
        </Link>
        <Link to="/Ocean" className="link">
          <h3>Global Ocean Temperature</h3>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
