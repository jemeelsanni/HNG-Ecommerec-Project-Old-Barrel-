import React from "react";
import { Link } from "react-router-dom";
import tequila from "../assets/Tequila.png";
import azul from "../assets/Azul.png";
import henessy from "../assets/henessy.png";
const BestSeller = () => {
  return (
    <div className=" mulish-font">
      <div className="hidden laptop:block">
        <div className=" mx-[70px]">
          <div className=" my-[25px]">
            <p className="bestseller">Best Sellers</p>
          </div>
          <div className="grid laptop:grid-cols-3 tablet:grid-cols-1 gap-20 ">
            <div className="flex flex-col gap-[20px] items-right w-[395px] ">
              <Link to="/product" className="">
                <img src={tequila} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  DOS ARTES PLATA LIMITED RELEASE 1L TEQUILA
                </p>
                <div className="flex justify-between mt-[15px]">
                  <div className=" flex gap-[6px]">
                    <p className=" discount-price text">$189.99</p>
                    <p className=" price line-through">$200.00</p>
                  </div>
                  <Link to="/">
                    <p className="cart">add to cart</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-right w-[395px]">
              <Link to="/product" className="">
                <img src={azul} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  CLASE AZUL DURANGO MEZCAL TEQUILA
                </p>
                <div className="flex justify-between mt-[15px]">
                  <div className=" flex gap-[6px]">
                    <p className=" discount-price text">$256.99</p>
                    <p className=" price line-through">$290.00</p>
                  </div>
                  <Link to="/">
                    <p className="cart">add to cart</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-right w-[395px]">
              <Link to="/product" className="">
                <img src={henessy} alt="" />
              </Link>
              <div>
                <p className="products-title">HENNESSY COGNAC X.O. 750 ML </p>
                <div className="flex justify-between mt-[15px]">
                  <div className=" flex gap-[6px]">
                    <p className=" discount-price text">$324.99</p>
                    <p className=" price line-through">$324.99</p>
                  </div>
                  <Link to="/">
                    <p className="cart">add to cart</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <div className=" mx-[21px]">
          <div className=" my-[15px]">
            <p className="bestseller">Best Sellers</p>
          </div>
          <div className="grid grid-cols-1 gap-[20px] ">
            <div className="flex flex-col gap-[20px] items-right w-[347px] ">
              <Link to="/product" className="">
                <img src={tequila} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  DOS ARTES PLATA LIMITED RELEASE 1L TEQUILA
                </p>
                <div className="flex justify-between mt-[15px]">
                  <div className=" flex gap-[6px]">
                    <p className=" discount-price text">$189.99</p>
                    <p className=" price line-through">$200.00</p>
                  </div>
                  <Link to="/">
                    <p className="cart">add to cart</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-right w-[347px]">
              <Link to="/product" className="">
                <img src={azul} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  CLASE AZUL DURANGO MEZCAL TEQUILA
                </p>
                <div className="flex justify-between mt-[15px]">
                  <div className=" flex gap-[6px]">
                    <p className=" discount-price text">$256.99</p>
                    <p className=" price line-through">$290.00</p>
                  </div>
                  <Link to="/">
                    <p className="cart">add to cart</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-right w-[347px]">
              <Link to="/product" className="">
                <img src={henessy} alt="" />
              </Link>
              <div>
                <p className="products-title">HENNESSY COGNAC X.O. 750 ML </p>
                <div className="flex justify-between mt-[15px]">
                  <div className=" flex gap-[6px]">
                    <p className=" discount-price text">$324.99</p>
                    <p className=" price line-through">$324.99</p>
                  </div>
                  <Link to="/">
                    <p className="cart">add to cart</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
