import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../Cartcontext";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "/api/products?organization_id=412f7382572440f0a6a1191e3d65a77c&reverse_sort=false&page=1&size=10&Appid=1VPSVW4FENHI09L&Apikey=ab2f5ea9b8f841b695f321ca12c160a720240713012101546394",
          {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        const data = response.data.items;
        console.log("Fetched products:", data); // Log the response to see if data is fetched
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (currentPrice) => {
    if (Array.isArray(currentPrice) && currentPrice.length > 0) {
      const priceData = currentPrice[0];
      const currency = Object.keys(priceData)[0];
      const price = priceData[currency][0];
      const dollarPrice = parseFloat(price).toFixed(2);
      return `$${dollarPrice}`;
    } else if (typeof currentPrice === "number") {
      return `$${parseFloat(currentPrice).toFixed(2)}`;
    }
    return "Price not available";
  };

  return (
    <div className="mulish-font">
      <div className="hidden laptop:block">
        <div className="mx-[70px]">
          <div className="my-[25px]">
            <p className="bestseller">Best Sellers</p>
          </div>
          <div className="grid laptop:grid-cols-3 tablet:grid-cols-1 gap-20">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-[20px] items-right w-[395px]"
              >
                <Link to={`/product/${product.id}`} className="">
                  {product.photos && product.photos[0] && (
                    <img
                      src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                      alt={product.name}
                    />
                  )}
                </Link>
                <div>
                  <p className="products-title">{product.name}</p>
                  <div className="flex justify-between mt-[15px]">
                    <div className="flex gap-[6px]">
                      <p className="discount-price text">
                        {formatPrice(product.current_price)}
                      </p>
                    </div>
                    {/* <button
                      onClick={() => {
                        console.log("Adding to cart:", product); // Log product data
                        addToCart(product);
                      }}
                    >
                      <p className="cart">add to cart</p>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block laptop:hidden">
        <div className="mx-[21px]">
          <div className="my-[15px]">
            <p className="bestseller">Best Sellers</p>
          </div>
          <div className="grid grid-cols-1 gap-[20px]">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-[20px] items-right w-[347px]"
              >
                <Link to={`/product/${product.id}`} className="">
                  {product.photos && product.photos[0] && (
                    <img
                      src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                      alt={product.name}
                    />
                  )}
                </Link>
                <div>
                  <p className="products-title">{product.name}</p>
                  <div className="flex justify-between mt-[15px]">
                    <div className="flex gap-[6px]">
                      <p className="discount-price text">
                        {formatPrice(product.current_price)}
                      </p>
                    </div>
                    {/* <button
                      onClick={() => {
                        console.log("Adding to cart:", product); // Log product data
                        addToCart(product);
                      }}
                    >
                      <p className="cart">add to cart</p>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
