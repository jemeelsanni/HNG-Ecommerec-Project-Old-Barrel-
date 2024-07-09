import React from "react";
import { Link } from "react-router-dom";
import whiskey from "../../assets/check-whiskey.png";

const Checkoutform = () => {
  return (
    <div>
      <div className="hidden laptop:block">
        <form className="w-[527px]" action="">
          <div className="mb-[36px]">
            <h2 className="form-head mb-[20px]">Contact</h2>
            <div className=" flex flex-col gap-[10px] ">
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="text"
                placeholder="Email"
              />
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="mb-[36px]">
            <h2 className="form-head mb-[20px]">Delivery</h2>
            <div className=" flex flex-col gap-[10px] ">
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="text"
                placeholder="Country/Region"
              />
              <div className="flex gap-[7px]">
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="number"
                placeholder="Address"
              />
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="number"
                placeholder="Apartment, Suite, etc. (optional)"
              />
              <div className="flex gap-[7px]">
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="text"
                  placeholder="city"
                />
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="text"
                  placeholder="state"
                />
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="text"
                  placeholder="postal code"
                />
              </div>
            </div>
          </div>
          <div className="mb-[36px]">
            <h2 className="form-head mb-[6px]">Payment</h2>
            <p className="form-p mb-[20px]">
              All transactions are secure and encrypted.
            </p>
            <div className=" flex flex-col gap-[10px] ">
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="text"
                placeholder="Card Number"
              />
              <div className="flex gap-[7px]">
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="date"
                  placeholder="expiration date (mm /yy)"
                />
                <input
                  className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                  type="number"
                  placeholder="Security code"
                />
              </div>
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="text"
                placeholder="name on card"
              />
              <input
                className=" pl-[27px] h-[62px] w-full rounded border border-[#3B383A] input-tex"
                type="number"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>
          </div>
          <Link to="/">
            <button className=" h-[62px] w-full rounded px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button">
              complete order
            </button>
          </Link>
        </form>
      </div>
      {/* mobile */}
      <div className=" block laptop:hidden ">
        <form className="w-full" action="">
          <div className="mb-[36px]">
            <h2 className="form-head mb-[20px]">Contact</h2>
            <div className=" flex flex-col gap-[10px] ">
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="text"
                placeholder="Email"
              />
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="mb-[36px]">
            <h2 className="form-head mb-[20px]">Delivery</h2>
            <div className=" flex flex-col gap-[10px] ">
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="text"
                placeholder="Country/Region"
              />
              <div className="flex gap-[7px]">
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="number"
                placeholder="Address"
              />
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="number"
                placeholder="Apartment, Suite, etc. (optional)"
              />
              <div className="flex gap-[7px]">
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="text"
                  placeholder="city"
                />
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="text"
                  placeholder="state"
                />
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="text"
                  placeholder="postal code"
                />
              </div>
            </div>
          </div>
          <div className="mb-[36px]">
            <h2 className="form-head mb-[6px]">Payment</h2>
            <p className="form-p mb-[20px]">
              All transactions are secure and encrypted.
            </p>
            <div className=" flex flex-col gap-[10px] ">
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="text"
                placeholder="Card Number"
              />
              <div className="flex gap-[7px]">
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="date"
                  placeholder="expiration date (mm /yy)"
                />
                <input
                  className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                  type="number"
                  placeholder="Security code"
                />
              </div>
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="text"
                placeholder="name on card"
              />
              <input
                className=" pl-[27px] h-[50px] w-full rounded border border-[#3B383A] input-tex-m"
                type="number"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>
          </div>

          <div className="mb-[24px]">
            <h2 className="form-head mb-[12px]">Order</h2>
            <div className="flex gap-[16px]">
              <div>
                <img className="w-[138px] h-[138px]" src={whiskey} alt="" />
              </div>
              <div className="w-[384px]">
                <h3 className="cart-head-m mb-[15px]">
                  WHISTLEPIG 10 YEAR "WHISKEY REVOLUTION" SINGLE BARREL RYE
                  WHISKEY
                </h3>
                <div className="cart-amount-m flex justify-between mb-[10px]">
                  <p>Amount</p>
                  <p>1</p>
                </div>
                <div className="cart-amount-m flex justify-between mb-[10px]">
                  <p>sub total</p>
                  <p>$256.99</p>
                </div>
                <div className="cart-amount-m flex justify-between mb-[10px]">
                  <p>shipping</p>
                  <p>$12.00</p>
                </div>
                <div className="cart-total-m flex justify-between">
                  <p>total</p>
                  <p>$268.99</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <button className=" h-[62px] w-full rounded text-center py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button-m">
              complete order
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Checkoutform;
