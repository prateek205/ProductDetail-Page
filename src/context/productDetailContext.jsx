import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductDetailContext = createContext();

export const ProductDetailProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://mock-api-rreb.onrender.com/appliances/14")
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProductDetailContext.Provider value={{product}}>
      {children}
    </ProductDetailContext.Provider>
  );
};

export const useProductDetail = () => useContext(ProductDetailContext);
