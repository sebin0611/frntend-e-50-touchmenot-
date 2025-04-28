import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosinstance } from "../../Config/axiosinstance";

// Move WishlistButton OUTSIDE
const WishlistButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className="btn py-6 border-none mx-2.5 mb-1.5 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "red" : "none"}
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="size-[1.2em]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
             -1.935 0-3.597 1.126-4.312 2.733
             -.715-1.607-2.377-2.733-4.313-2.733
             C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12
             9 12s9-4.78 9-12Z"
        />
      </svg>
      WISHLIST
    </button>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  console.log(productDetails, "prodetail");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosinstance.get(`/product/product/${id}`);
        setProductDetails(res.data.data.displaySingleProduct);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!productDetails) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4b2d1f] to-[#f9f6f1] flex flex-col md:flex-row text-gray-900">
      {/* Left Info Section */}
      <div className="w-full md:w-1/2 px-10 py-12 text-white">
        <h2 className="text-3xl font-semibold mb-4">₹{productDetails.price}</h2>
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          {productDetails.name}
        </h1>
        <p className="mb-6 text-lg leading-relaxed max-w-lg text-white/80">
          {productDetails.description}
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            Add To Cart
          </button>
          {/* Use Wishlist Button here */}
          <WishlistButton />
        </div>

        {/* Extra Info */}
        <div className="mt-10 text-sm space-y-3 max-w-lg">
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {productDetails.category}
          </p>
          <p>
            <span className="font-semibold">Stock Available:</span>{" "}
            {productDetails.stock}
          </p>
          <p>
            <span className="font-semibold">Sold:</span> {productDetails.sold}
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center py-12 px-10">
        <img
          src={productDetails.images[0]}
          alt={productDetails.name}
          className="max-w-md w-full object-contain z-10"
        />

        {/* Thumbnail Options */}
        {productDetails.images.length > 1 && (
          <div className="absolute right-10 top-20 space-y-4 hidden md:flex flex-col">
            {productDetails.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Option ${i}`}
                className="w-14 h-14 object-cover rounded-md border border-gray-300 hover:scale-105 transition"
              />
            ))}
          </div>
        )}

        {/* Related Product (Dummy Static for Now) */}
        <div className="absolute bottom-8 left-10 w-full max-w-md">
          <p className="text-sm text-gray-600 font-semibold mb-1">
            Product related
          </p>
          <div className="flex items-center space-x-3 bg-white p-3 rounded-md shadow-md">
            <img
              src={productDetails.images[0]}
              alt="related"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {productDetails.name}
              </p>
              <p className="text-yellow-500 text-sm">★★★★★</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
