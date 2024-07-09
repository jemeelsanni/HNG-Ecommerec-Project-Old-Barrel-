import React from "react";
import Checkoutform from "./Checkoutform";
import whiskey from "../../assets/check-whiskey.png";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Checkout = () => {
  return (
    <div className=" bg-[#FCF8F3]">
      <Header />
      <div className="hidden laptop:block">
        <div className="flex gap-[180px] my-[65px] mx-[89px]">
          <Checkoutform />
          <div className="flex gap-[16px]">
            <div>
              <img src={whiskey} alt="" />
            </div>
            <div className="w-[384px]">
              <h3 className="cart-head">
                WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE
                WHISKEY
              </h3>
              <div className="cart-amount flex justify-between">
                <p>Amount</p>
                <p>1</p>
              </div>
              <div className="cart-amount flex justify-between">
                <p>sub total</p>
                <p>$256.99</p>
              </div>
              <div className="cart-amount flex justify-between">
                <p>shipping</p>
                <p>$12.00</p>
              </div>
              <div className="cart-total flex justify-between">
                <p>total</p>
                <p>$268.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" block laptop:hidden ">
        <div className="my-[32px] mx-[38px]">
          <Checkoutform />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
