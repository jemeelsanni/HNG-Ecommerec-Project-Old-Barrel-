import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import whistle from "../../assets/Bottle.png";

const Product = () => {
  return (
    <div className="bg-[#FCF8F3]">
      <div>
        <Header />
        <div className="hidden laptop:block">
          <div className="flex gap-[64px] mx-[100px] mt-[70px] mb-[100px] pr-[50px]">
            <div className=" border rounded-none w-[650px]  border-black justify-center flex">
              <img className="w-full" src={whistle} alt="" />
            </div>
            <div>
              <h1 className="product-title">
                WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE
                WHISKEY
              </h1>
              <p className="product-description mt-[20px] mb-[32px]">
                WhistlePig 10 Year Old "Whiskey Revolution" Single Barrel Rye
                Whiskey. An extremely tasty barrel pick from our own whiskey
                group. This is a special one that you don't want to miss out on!
              </p>
              <div className=" flex flex-col gap-[20px] ">
                <button className=" h-[62px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button">
                  add to cart
                </button>
                <Link to="/checkout">
                  <button className=" h-[62px] w-full px-[120px] py-[18px] bg-[#DCA47C] shadow-custom text-[#FCF8F3] text-button">
                    buy now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className=" block laptop:hidden ">
          <div className="flex flex-col items-left justify-around gap-[16px] mx-[21px] mt-[51px] mb-[30px]">
            <div className=" border rounded-none w-[305px] h-[421px]  border-black  justify-center flex">
              <img className="w-full" src={whistle} alt="" />
            </div>
            <div>
              <h1 className="product-title-m">
                WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE
                WHISKEY
              </h1>
              <p className="product-description-m mt-[20px] mb-[26px]">
                WhistlePig 10 Year Old "Whiskey Revolution" Single Barrel Rye
                Whiskey. An extremely tasty barrel pick from our own whiskey
                group. This is a special one that you don't want to miss out on!
              </p>
              <div className=" flex flex-col gap-[12px] ">
                <button className=" h-[50px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button-m">
                  add to cart
                </button>
                <Link to="/checkout">
                  <button className=" h-[50px] w-full px-[120px] py-[18px] bg-[#DCA47C] shadow-custom text-[#FCF8F3] text-button-m">
                    buy now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
