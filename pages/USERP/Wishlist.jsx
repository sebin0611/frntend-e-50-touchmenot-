import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Longstride Backpack",
    price: 90.0,
    image: "/images/product1.png",
    category: "Accessories, Luggage",
  },
  {
    id: 2,
    name: "Bloom School Bag",
    price: 95.0,
    image: "/images/product2.png",
    category: "Accessories, Backpack",
    sale: true,
  },
  {
    id: 3,
    name: "Classic White Sneakers",
    price: 65.0,
    image: "/images/product3.png",
    category: "Clothing, Footwear",
  },
  // Add more mock products as needed
];

const WishlistPage = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Wishlist</h1>
          <p className="text-gray-600">Check out your favorite saved products!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-red-500 font-bold text-md mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.sale && (
                    <span className="inline-block mt-2 text-xs font-bold text-white bg-red-500 px-2 py-1 rounded">
                      SALE
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;