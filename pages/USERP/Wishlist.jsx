import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosinstance } from "../../Config/axiosinstance";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axiosinstance.get("/wishlist");
        setWishlist(res.data.data); // Adjust based on your API response structure
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600 text-lg">Loading your wishlist...</div>;
  }

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600 text-lg">
        Your wishlist is empty 😢
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Wishlist</h1>
          <p className="text-gray-600">Check out your favorite saved products!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.images?.[0] || "/images/default-product.png"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-red-500 font-bold text-md mt-2">
                    ₹{product.price?.toFixed(2)}
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
