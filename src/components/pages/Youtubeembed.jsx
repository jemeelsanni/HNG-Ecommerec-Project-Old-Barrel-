import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div>
    <div className="hidden laptop:block">
      <div className="my-[25px] mx-[70px]">
        <p className="bestseller mt-[45px] mb-[10px]">Best Sellers</p>
        <div className="pb-[56.25%] relative h-0">
          <iframe
            width="1372px"
            height="610px"
            src={`https://www.youtube.com/embed/${embedId}`}
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="left-0 top-0 h-full w-full absolute"
          />
        </div>
        <div className="flex flex-col items-center pt-[40px]">
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
      </div>
    </div>
    {/* mobile */}
    <div className=" block laptop:hidden ">
      <div className="my-[17px] mx-[21px]">
        <p className="bestseller mt-[45px] mb-[10px]">Best Sellers</p>
        <div className="pb-[56.25%] relative h-0">
          <iframe
            width="1372px"
            height="610px"
            src={`https://www.youtube.com/embed/${embedId}`}
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="left-0 top-0 h-full w-full absolute"
          />
        </div>
        <div className="flex flex-col items-center pt-[40px] mx-[17px]">
          <p className="mb-[20px] text-center sub-text">
            Subscribe for updates on upcoming products!
          </p>
          <form
            className="w-[300px] flex flex-col gap-[10px] justify-center  "
            action=""
          >
            <input
              className=" pl-[27px] h-[50px] w-full rounded-sm border border-[#3B383A] input-text"
              type="text"
              placeholder="EMAIL"
            />
            <button className=" h-[50px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
