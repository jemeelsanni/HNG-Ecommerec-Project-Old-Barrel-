import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useCart } from "../../../Cartcontext";
import line from "../../assets/Line.png";
import exit from "../../assets/delete.png";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const formatPrice = (currentPrice) => {
    if (Array.isArray(currentPrice) && currentPrice.length > 0) {
      const priceData = currentPrice[0];
      const currency = Object.keys(priceData)[0];
      const price = priceData[currency][0];
      return `${currency} ${parseFloat(price).toFixed(2)}`;
    } else if (typeof currentPrice === "number") {
      return `$${parseFloat(currentPrice).toFixed(2)}`;
    }
    return "Price not available";
  };

  const getTotalPrice = () => {
    return cart
      .reduce(
        (acc, product) => acc + product.current_price * product.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="mulish-font bg-[#FCF8F3]">
      <Header />
      <div className="hidden laptop:block">
        <div className="mx-[72px] pt-[54px] pb-[100px]">
          <h5>Your cart</h5>
          <div className="th flex items-center text-center mx-[25px] my-[15px] justify-between">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="timbu-line">
            <img src={line} alt="line" />
          </div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center my-[15px]"
            >
              <div className="flex items-center gap-[15px]">
                {product.photos && product.photos[0] && (
                  <img
                    className="w-[60px] h-[60px]"
                    src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                    alt={product.name}
                  />
                )}
                <p>{product.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-row bg-[#DCA47C] items-center w-[172px] h-[47px] space-x-4 rounded-sm">
                  <button
                    className="bg-[#DCA47C] w-1/3 text-gray-700 px-3 py-1 rounded"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="count w-1/3 text-center bg-[#DCA47C] text-xl">
                    {product.quantity}
                  </span>
                  <button
                    className="bg-[#DCA47C] w-1/3 text-gray-700 px-3 py-1 rounded"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(product.id)}>
                  <img src={exit} alt="Remove" />
                </button>
              </div>
              <div>
                <span className="count w-1/3 text-center bg-[#DCA47C] text-xl">
                  {formatPrice(product.current_price * product.quantity)}
                </span>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mx-[40px]">
            <Link to="/checkout">
              <button className="h-[60px] w-[300px] py-[15px] bg-[#DCA47C] shadow-custom text-[#FCF8F3] text-button">
                Checkout
              </button>
            </Link>
            <div>
              <p className="text-[#1A1A1A]">Total: ${getTotalPrice()}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block laptop:hidden">
        <div className="mx-[30px] pt-[30px] pb-[35px]">
          <h5>Your cart</h5>
          <div className="th-m flex items-center text-center mx-[10px] my-[15px] justify-between">
            <p>Product</p>
            <p>Total</p>
          </div>
          <div className="timbu-line">
            <img src={line} alt="line" />
          </div>
          <div className="flex">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center my-[15px]"
              >
                <div className="flex flex-row gap-2">
                  {product.photos && product.photos[0] && (
                    <img
                      className="w-[100px] h-full"
                      src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                      alt={product.name}
                    />
                  )}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-[15px]">
                      <p>{product.name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-row bg-[#DCA47C] items-center w-[150px] h-[47px] space-x-4 rounded-sm">
                        <button
                          className="bg-[rgb(220,164,124)] w-1/3 text-gray-700 px-3 py-1 rounded"
                          onClick={() => decrementQuantity(product.id)}
                        >
                          -
                        </button>
                        <span className="count w-1/3 text-center bg-[#DCA47C] text-xl">
                          {product.quantity}
                        </span>
                        <button
                          className="bg-[#DCA47C] w-1/3 text-gray-700 px-3 py-1 rounded"
                          onClick={() => incrementQuantity(product.id)}
                        >
                          +
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(product.id)}>
                        <img src={exit} alt="Remove" />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="count w-1/3 text-center text-xl ml-3">
                    {formatPrice(product.current_price * product.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mx-[10px]">
            <Link to="/checkout">
              <button className="h-[40px] w-[180px] py-[10px] bg-[#DCA47C] shadow-custom text-[#FCF8F3] text-button-m">
                Checkout
              </button>
            </Link>
            <div>
              <p className="text-[#1A1A1A]">Total: ${getTotalPrice()}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
