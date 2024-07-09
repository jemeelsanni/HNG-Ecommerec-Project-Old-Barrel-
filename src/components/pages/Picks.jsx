import React from "react";
import { Link } from "react-router-dom";
import barrel from "../assets/Barrel.png";
import whiskey from "../assets/whiskey.png";
import whitepig from "../assets/whistlepig.png";

const Picks = () => {
  return (
    <div className=" mulish-font mt-[45px] mb-[100px]">
      <div className="hidden laptop:block">
        <div className=" mx-[70px]">
          <div className="my-[25px]">
            <p className="bestseller">Barrel picks</p>
          </div>
          <div className="grid laptop:grid-cols-3 tablet:grid-cols-1 gap-12 ">
            <div className="flex flex-col w-[395px] gap-[20px] items-right ">
              <Link to="/product" className="">
                <img src={barrel} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  BARREL CRAFT SPIRITS SINGLE BARREL BOURBON SELECTED BY WHISKEY
                  REVOLUTION 109.8 PROOF{" "}
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
            <div className="flex flex-col w-[395px] gap-[20px] items-right">
              <Link to="/product" className="">
                <img src={whiskey} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  MAKER'S MARK WHISKEY REVOLUTION 'CARAMEL CREAMS' SELECTION
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
            <div className="flex w-[395px] flex-col gap-[20px] items-right">
              <Link to="/product" className="">
                <img src={whitepig} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE
                  WHISKEY
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
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <div className=" mx-[21px] mt-[35px]">
          <div className="my-[15px]">
            <p className="bestseller">Barrel picks</p>
          </div>
          <div className="grid grid-cols-1 gap-[20px] ">
            <div className="flex flex-col w-[347px] gap-[20px] items-right ">
              <Link to="/product" className="">
                <img src={barrel} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  BARREL CRAFT SPIRITS SINGLE BARREL BOURBON SELECTED BY WHISKEY
                  REVOLUTION 109.8 PROOF{" "}
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
            <div className="flex flex-col w-[347px] gap-[20px] items-right">
              <Link to="/product" className="">
                <img src={whiskey} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  MAKER'S MARK WHISKEY REVOLUTION 'CARAMEL CREAMS' SELECTION
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
            <div className="flex w-[347px] flex-col gap-[20px] items-right">
              <Link to="/product" className="">
                <img src={whitepig} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE
                  WHISKEY
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picks;
