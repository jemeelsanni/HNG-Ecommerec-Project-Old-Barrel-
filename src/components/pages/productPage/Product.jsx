import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useCart } from "../../../Cartcontext";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `/api/products/${productId}?organization_id=412f7382572440f0a6a1191e3d65a77c&Appid=1VPSVW4FENHI09L&Apikey=ab2f5ea9b8f841b695f321ca12c160a720240713012101546394`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log("API response:", response.data); // Log the API response
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const formatPrice = (currentPrice) => {
    if (Array.isArray(currentPrice) && currentPrice.length > 0) {
      const priceData = currentPrice[0];
      const currency = Object.keys(priceData)[0];
      const price = priceData[currency][0];
      return `${currency} ${parseFloat(price).toFixed(2)}`;
    } else if (typeof currentPrice === "number") {
      return `$${parseFloat(currentPrice).toFixed(2)}`;
    }
    return "Price not available";
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#FCF8F3]">
      <div>
        <Header />
        <div className="hidden laptop:block">
          <div className="flex gap-[64px] mx-[100px] mt-[70px] mb-[100px] pr-[50px]">
            <div className="border rounded-none w-[650px] border-black justify-center flex">
              {product.photos && product.photos.length > 0 ? (
                <img
                  className="w-full"
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                />
              ) : (
                <div>No image available</div>
              )}
            </div>
            <div>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description mt-[20px] mb-[32px]">
                {product.description}
              </p>
              <p className="product-price mt-[20px] mb-[32px]">
                {formatPrice(product.current_price)}
              </p>
              <div className="flex flex-col gap-[20px]">
                <button
                  className="h-[62px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button"
                  onClick={() => addToCart(product)}
                >
                  add to cart
                </button>
                <Link to="/checkout">
                  <button className="h-[62px] w-full px-[120px] py-[18px] bg-[#DCA47C] shadow-custom text-[#FCF8F3] text-button">
                    buy now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="block laptop:hidden">
          <div className="flex flex-col items-left justify-around gap-[16px] mx-[21px] mt-[51px] mb-[30px]">
            <div className="border rounded-none w-[305px] h-[421px] border-black justify-center flex">
              {product.photos && product.photos.length > 0 ? (
                <img
                  className="w-full"
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                />
              ) : (
                <div>No image available</div>
              )}
            </div>
            <div>
              <h1 className="product-title-m">{product.name}</h1>
              <p className="product-description-m mt-[20px] mb-[26px]">
                {product.description}
              </p>
              <p className="product-price-m mt-[20px] mb-[26px]">
                {formatPrice(product.current_price)}
              </p>
              <div className="flex flex-col gap-[12px]">
                <button
                  className="h-[50px] w-full px-[120px] py-[18px] bg-[#698474] shadow-custom text-[#FCF8F3] text-button-m"
                  onClick={() => addToCart(product)}
                >
                  add to cart
                </button>
                <Link to="/checkout">
                  <button className="h-[50px] w-full px-[120px] py-[18px] bg-[#DCA47C] shadow-custom text-[#FCF8F3] text-button-m">
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
