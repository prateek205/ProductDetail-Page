import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductDetailProvider } from "./context/productDetailContext";

createRoot(document.getElementById("root")).render
(
  <ProductDetailProvider>
    <App />
  </ProductDetailProvider>
);
