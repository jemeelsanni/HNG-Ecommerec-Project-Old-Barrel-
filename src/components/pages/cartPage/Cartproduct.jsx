import React from "react";
import Counter from "./Counter";
import whiskey from "../../assets/whiskrev.png";

const Cartproduct = () => {
  return (
    <div>
      <div className="hidden laptop:block">
        <div className="flex mulish-font gap-4 w-[409px]  my-[12px] ml-[30px]">
          <img src={whiskey} alt="" />
          <div className="flex flex-col gap-[52px]">
            <p className="whistle">
              WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE WHISKEY
            </p>
            <p className="whistle-price">$256.99</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <div className="flex mulish-font gap-4 w-[124px]  my-[12px]">
          <img className="w-[113px] h-[113px]" src={whiskey} alt="" />
          <div className="flex flex-col justify-between">
            <p className="whistle-m">
              WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE WHISKEY
            </p>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
