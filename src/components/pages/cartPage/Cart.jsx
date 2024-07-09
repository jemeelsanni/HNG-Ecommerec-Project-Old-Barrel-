import React from "react";
import { Link } from "react-router-dom";
import line from "../../assets/Line.png";
import Cartproduct from "./Cartproduct";
import Counter from "./Counter";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Cart = () => {
  return (
    <div className="mulish-font bg-[#FCF8F3]">
      <Header />
      <div className="hidden laptop:block">
        <div className="mx-[72px] pt-[54px] pb-[100px]">
          <div>
            <h5>Your cart</h5>
          </div>
          <div>
            <div className=" th flex items-center text-center mx-[25px] my-[15px] justify-between">
              <p>Product</p>
              <>Quantity</>
              <p>Total</p>
            </div>
            <div>
              <img src={line} className=" w-full" alt="" />
            </div>
            <div className="flex items-center justify-between">
              <Cartproduct />
              <Counter />
              <div>
                <p>$256.99</p>
              </div>
            </div>

            <div>
              <img src={line} className=" w-full" alt="" />
            </div>
          </div>
          <div className="flex flex-col mt-[32px]">
            <div className="flex gap-4 justify-end">
              <p className="estimate">estimated total</p>
              <p className=" estimate-price">$256.99</p>
            </div>
            <div className="flex justify-end mt-[32px] mb-[22px]">
              <img src={line} className=" w-[286px]" alt="" />
            </div>
            <div className="flex justify-end">
              <p className="tax">
                Taxes, discounts and shipping calculated at checkout
              </p>
            </div>
            <div className="flex justify-end mt-[4px]">
              <Link to="/checkout">
                <button className=" h-[62px] w-[400px] px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button">
                  checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <div className="mx-[21px] pt-[24px] pb-[50px]">
          <div>
            <h5 className=" text-xl font-medium">Your cart</h5>
          </div>
          <div>
            <div className=" th flex items-center text-center my-[15px] justify-between">
              <p>Product</p>

              <p>Total</p>
            </div>
            <div>
              <img src={line} className=" w-full" alt="" />
            </div>
            <div className="flex justify-between">
              <Cartproduct />

              <div className=" pt-2">
                <p className="whistle-price-m">$256.99</p>
              </div>
            </div>

            <div>
              <img src={line} className=" w-full" alt="" />
            </div>
          </div>
          <div className="flex flex-col mt-[16px]">
            <div className="flex gap-4 justify-center">
              <p className="estimate-m">estimated total</p>
              <p className=" estimate-price-m">$256.99</p>
            </div>
            <div className="flex justify-center mt-[16px] mb-[22px]">
              <img src={line} className="" alt="" />
            </div>
            <div className="flex  mb-[10px]">
              <p className="tax-m">
                Taxes, discounts and shipping calculated at checkout
              </p>
            </div>
            <Link to="/checkout" className="flex justify-center mt-[4px]">
              <button className=" h-[50px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button-m">
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
