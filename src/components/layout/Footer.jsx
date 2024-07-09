import React from "react";
import barrel from "../assets/big-barrel.png";
import barrel2 from "../assets/old-barrel2.png";

const Footer = () => {
  return (
    <div>
      <div className="hidden laptop:block">
        <div className="mulish-font bg-[#FFF6E9] px-[70px] py-[50px] border-t-black border ">
          <div className="flex justify-between  ">
            <div>
              <img src={barrel} alt="" />
            </div>
            <div>
              <p className="mb-[20px] text-center sub-text">
                SUBSCRIBE FOR 10% OFF YOUR FIRST ORDER
              </p>
              <form
                className="w-[527px] flex flex-col gap-[10px] justify-center  "
                action=""
              >
                <input
                  className=" pl-[27px] h-[62px] w-full rounded-sm border border-[#3B383A] input-text"
                  type="text"
                  placeholder="EMAIL"
                />
                <button className=" h-[62px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button">
                  SUBMIT
                </button>
              </form>
            </div>
            <div>
              <img src={barrel2} alt="" />
            </div>
          </div>
          <div className="foot flex text-center justify-center gap-[23px] mt-[126px]">
            <p>
              &copy;2024, <span> OLD BARREL</span>
            </p>
            <p>REFUND POLICY</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS OF SERVICE</p>
            <p>CONTACT INFORMATION</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <div className="mulish-font bg-[#FFF6E9] px-[27px] py-[46px] border-t-black border ">
          <div className="flex flex-col gap-[22px] justify-between  ">
            <div>
              <p className="mb-[20px] text-center sub-text-m">
                SUBSCRIBE FOR 10% OFF YOUR FIRST ORDER
              </p>
              <form
                className="w-[347px] flex flex-col gap-[10px] justify-center items-center "
                action=""
              >
                <input
                  className=" pl-[27px] h-[50px] w-full rounded-sm border border-[#3B383A] input-tex-m"
                  type="text"
                  placeholder="EMAIL"
                />
                <button className=" h-[50px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button-m">
                  SUBMIT
                </button>
              </form>
            </div>
            <div className="flex justify-center">
              <img className="w-[192px] h-[91px]" src={barrel2} alt="" />
            </div>
          </div>
          <div className="foot grid grid-cols-2 text-center justify-center gap-[23px] mt-[20px] ">
            <p className="sub-text-m">
              &copy;2024, <span> OLD BARREL</span>
            </p>
            <p className="sub-text-m">REFUND POLICY</p>
            <p className="sub-text-m">PRIVACY POLICY</p>
            <p className="sub-text-m">TERMS OF SERVICE</p>
            <p className="sub-text-m">CONTACT INFORMATION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
