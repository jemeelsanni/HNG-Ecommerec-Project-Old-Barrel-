import React from "react";
import Checkoutform from "./Checkoutform";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useCart } from "../../../Cartcontext";

const Checkout = () => {
  const { cart } = useCart();

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, product) => {
      console.log(
        `Product price: ${product.price}, quantity: ${product.quantity}`
      );
      return (
        sum + parseFloat(product.price.replace("$", "")) * product.quantity
      );
    }, 0);
    const shipping = cart.length > 0 ? 12.0 : 0;
    return (subtotal + shipping).toFixed(2);
  };

  return (
    <div className="bg-[#FCF8F3]">
      <Header />
      <div className="hidden laptop:block">
        <div className="flex gap-[180px] my-[65px] mx-[89px]">
          <Checkoutform />
          <div className="flex gap-[16px]">
            {cart.map((product) => (
              <div key={product.id} className="w-[384px]">
                <div className="flex gap-[16px]">
                  <div>
                    <img
                      src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <h3 className="cart-head">{product.name}</h3>
                    <div className="cart-amount flex justify-between">
                      <p>Amount</p>
                      <p>{product.quantity}</p>
                    </div>
                    <div className="cart-amount flex justify-between">
                      <p>Sub total</p>
                      <p>
                        $
                        {(
                          parseFloat(product.price.replace("$", "")) *
                          product.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                    <div className="cart-amount flex justify-between">
                      <p>Shipping</p>
                      <p>$12.00</p>
                    </div>
                    <div className="cart-total flex justify-between">
                      <p>Total</p>
                      <p>${calculateTotal()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block laptop:hidden">
        <div className="my-[32px] mx-[38px]">
          <Checkoutform />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
