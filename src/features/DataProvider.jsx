// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

import { useEffect, useState } from "react";
import { DataContext } from "./allContext";
import PropTypes from "prop-types";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://fakestoreapi.com/products", { signal, mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  const value = { data, error, loading };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
