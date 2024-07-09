import React from "react";
import { Link } from "react-router-dom";
import lambo from "../assets/lambo.png";
import tyku from "../assets/tyku.png";
import carbnet from "../assets/carbnet.png";

const Wine = () => {
  return (
    <div className=" mulish-font">
      <div className="hidden laptop:block">
        <div className=" mx-[70px]">
          <div className="my-[25px]">
            <p className="bestseller">Wine</p>
          </div>
          <div className="grid laptop:grid-cols-3 tablet:grid-cols-1 justify-center ">
            <div className="flex flex-col gap-[20px] items-right w-[395px] ">
              <Link to="/product" className="">
                <img src={lambo} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  LAMBORGHINI GOLD: EXTRA DRY PROSECCO{" "}
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
                <img src={tyku} alt="" />
              </Link>
              <div>
                <p className="products-title">TYKU JUNMAI SAKE </p>
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
                <img src={carbnet} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  SILVER OAK CABERNET SAUVIGNON NAPA VALLEY{" "}
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
            <p className="bestseller">Wine</p>
          </div>
          <div className="grid grid-cols-1 gap-[20px] ">
            <div className="flex flex-col gap-[20px] items-right w-[347px] ">
              <Link to="/product" className="">
                <img src={lambo} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  LAMBORGHINI GOLD: EXTRA DRY PROSECCO{" "}
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
                <img src={tyku} alt="" />
              </Link>
              <div>
                <p className="products-title">TYKU JUNMAI SAKE </p>
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
                <img src={carbnet} alt="" />
              </Link>
              <div>
                <p className="products-title">
                  SILVER OAK CABERNET SAUVIGNON NAPA VALLEY{" "}
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

export default Wine;
