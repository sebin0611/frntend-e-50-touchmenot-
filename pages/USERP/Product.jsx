import React, { useEffect, useState } from 'react';
import Button from '../../components/USER/Button';
import { axiosinstance } from '../../Config/axiosinstance';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
 console.log(cart,"caarrtt")
console.log(productList,"proooductttt")


  // Fetch products when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosinstance.get('/product/products');

        

        setProductList(response.data.data);


      } catch (error) {
        console.error("Error fetching products:", error);
        console.log(response,"resssssssss")
      }
    };

    fetchProducts();
  }, []);

  // Function to handle add to cart
 // Inside ProductPage component (replace your addToCart logic with this)

const addToCart = async (product) => {
  try {
    const res = await axiosinstance.post(`/cart/addtocart/${product._id}`, {
      quantity: 1,
    });
    console.log("Added to cart:", res.data);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

  const handleInfoClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Shop</h1>
          <p className="text-lg text-gray-600">Give All You Need</p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center justify-between"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-32 w-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{product.category}</p>
              <p className="text-xl font-bold mb-2">₹{product.price}</p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => addToCart(product)}>Add to Cart</Button>
                <Button onClick={() => handleInfoClick(product._id)}>INFO</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Our New Stuff?</h2>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none"
            />
            <Button>Send</Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-gray-500 text-sm text-center">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">Return</a>
          </div>
          <p>&copy; 2023 Stuffsus. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ProductPage;
