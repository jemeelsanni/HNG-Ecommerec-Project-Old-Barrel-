import React, { useState } from "react";
import exit from "../../assets/delete.png";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-row bg-[#DCA47C]  items-center w-[172px] h-[47px] space-x-4 rounded-sm">
        <button
          className="bg-[#DCA47C] w-1/3  text-gray-700 px-3 py-1 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className=" count w-1/3 text-center bg-[#DCA47C] text-xl">
          {count}
        </span>
        <button
          className="bg-[#DCA47C] w-1/3 text-gray-700 px-3 py-1 rounded"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div>
        <img src={exit} alt="" />
      </div>
    </div>
  );
};

export default Counter;
