import React, { useEffect, useState } from "react";
import { axiosinstance } from "../../Config/axiosinstance";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axiosinstance.get("/cart/get-cart");
        setCartItems(res.data.cart.products); // Assuming API returns { cart: { products: [...] } }
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCart();
  }, []);

  const updateQty = async (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );

    // Optional: Sync with backend
    // try {
    //   await axiosinstance.patch(`/cart/update-quantity/${id}`, { delta });
    // } catch (error) {
    //   console.error("Failed to update quantity:", error);
    // }
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="min-h-screen flex">
      {/* Cart Section */}
      <div className="w-1/2 bg-yellow-200 p-10">
        <h2 className="text-2xl font-bold mb-6">My cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <button onClick={() => removeItem(item.id)} className="text-red-500 mr-4 text-xl">✖</button>
              <img src={item.productId.images} alt={item.productId.name} className="w-16 h-16 rounded-lg mr-4" />
              <div>
                <p className="font-semibold">{item.productId.name}</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateQty(item.id, -1)} className="px-2 bg-gray-300 rounded">−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item.id, 1)} className="px-2 bg-gray-300 rounded">+</button>
              <span className="ml-4 font-semibold">${(item.quantity * item.price).toFixed(2)}</span>
            </div>
          </div>
        ))}
        <hr className="my-6" />
        <p className="text-lg font-bold">Sub total: ${subtotal.toFixed(2)}</p>
      </div>

      {/* Checkout Section */}
      <div className="w-1/2 bg-white p-10">
        <h2 className="text-2xl font-bold mb-6">Check out</h2>
        <div className="flex items-center space-x-6 mb-6">
          <div className="text-blue-900 font-semibold">1 Shipping</div>
          <div className="text-blue-900 font-semibold border-b-2 border-yellow-400 pb-1">2 Billing</div>
          <div className="text-gray-500">3 Confirm</div>
        </div>

        <p className="mb-4">Please select and enter your billing information</p>

        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="mr-2"
            />
            💳 Card
          </label>
          <label>
            <input
              type="radio"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="mr-2"
            />
            🅿️ PayPal
          </label>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name on card"
            className="w-full border-b border-gray-400 p-2 outline-none"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Credit card number"
              className="w-full border-b border-gray-400 p-2 outline-none"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-24 border-b border-gray-400 p-2 outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Expiration date"
              className="w-1/2 border-b border-gray-400 p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Billing zip code"
              className="w-1/2 border-b border-gray-400 p-2 outline-none"
            />
          </div>

          <div className="text-sm text-gray-500 mt-4 flex items-center space-x-2">
            <span>🔒</span>
            <span>Secured payment</span>
            <img src="/images/mastercard.png" alt="mc" className="w-8 h-5 ml-2" />
            <img src="/images/visa.png" alt="visa" className="w-8 h-5 ml-2" />
            <img src="/images/amex.png" alt="amex" className="w-8 h-5 ml-2" />
          </div>

          <div className="flex justify-between mt-6">
            <button className="px-6 py-2 border rounded-md">Previous</button>
            <button className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
