import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import Product from "./components/pages/productPage/Product";
import Cart from "./components/pages/cartPage/Cart";
import Checkout from "./components/pages/checkOut/Checkout";
import Wine from "./components/pages/Wine";
import Picks from "./components/pages/Picks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/barbel" element={<Picks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
