import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className="body">
        <div className="link-container">
          <div className="link">
            <h3>Global Temperature</h3>
          </div>
          <div className="link">
            <h3>
              Carbon Dioxide (CO<sub>2</sub>)
            </h3>
          </div>
          <div className="link">
            <h3>
              Methane (CH<sub>4</sub>)
            </h3>
          </div>
          <div className="link">
            <h3>
              Nitrous Oxide (N<sub>2</sub>O)
            </h3>
          </div>
          <div className="link">
            <h3>Artic Ice</h3>
          </div>
          <div className="link">
            <h3>Global Ocean Temperature</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
