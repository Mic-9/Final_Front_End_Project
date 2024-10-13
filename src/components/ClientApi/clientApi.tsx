import axios from "axios";
import { useEffect, useState } from "react";

const useApi = () => {
  const [temperature, setTemperature] = useState(null);
  const [co2, setCo2] = useState(null);
  const [ch4, setCh4] = useState(null);
  const [n2o, setN2o] = useState(null);
  const [ice, setIce] = useState(null);
  const [ocean, setOcean] = useState(null);

  const fetchTemp = () => {
    axios
      .get("https://global-warming.org/api/temperature-api")
      .then((response) => {
        setTemperature(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      });
  };
  const fetchCo2 = () => {
    axios
      .get("https://global-warming.org/api/co2-api")
      .then((response) => {
        setCo2(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      });
  };
  const fetchCh4 = () => {
    axios
      .get("https://global-warming.org/api/methane-api")
      .then((response) => {
        setCh4(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      });
  };
  const fetchN2o = () => {
    axios
      .get("https://global-warming.org/api/nitrous-oxide-api")
      .then((response) => {
        setN2o(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      });
  };
  const fetchIce = () => {
    axios
      .get("https://global-warming.org/api/artic-api")
      .then((response) => {
        setIce(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      });
  };
  const fetchOcean = () => {
    axios
      .get("https://global-warming.org/api/ocean-warmig-api")
      .then((response) => {
        setOcean(response.data);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      });
  };

  useEffect(() => {
    fetchTemp();
    fetchCo2();
    fetchCh4();
    fetchN2o();
    fetchIce();
    fetchOcean();
  }, []);

  return { temperature, co2, ch4, n2o, ice, ocean };
};

export default useApi;
