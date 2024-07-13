import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Cartcontext";
import Index from "./components/pages/Index";
import Product from "./components/pages/productPage/Product";
import Cart from "./components/pages/cartPage/Cart";
import Checkout from "./components/pages/checkOut/Checkout";
import Wine from "./components/pages/Wine";
import Picks from "./components/pages/Picks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/barbel" element={<Picks />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
