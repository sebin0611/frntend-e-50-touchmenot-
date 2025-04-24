import React from 'react'

function Payment() {
  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#222] font-sans p-8">
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full">
        <h2 className="text-2xl font-semibold mb-4">CHECKOUT</h2>
        <div className="border-b border-gray-400 mb-6 pb-2 flex gap-6">
          <span className="text-gray-500">CONTACT INFO</span>
          <span className="text-gray-500">DELIVERY</span>
          <span className="font-semibold border-b-2 border-black">PAYMENT</span>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">YOUR DATA</h3>
            <p className="mt-1">JULIA KHACHIROVA</p>
            <p>+380991234567</p>
            <p>Ukraine, Odessa, St. Deribasovskaya, 12</p>
            <a href="#" className="text-sm text-blue-600 underline mt-1 inline-block">EDIT DATA</a>
          </div>

          <div>
            <h3 className="font-medium mb-2">SELECT A PAYMENT METHOD</h3>
            <div className="border p-4 rounded space-y-3 bg-white">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="accent-black" defaultChecked />
                VISA/MASTERCARD
              </label>
              <input type="text" placeholder="CARD NUMBER" className="w-full border p-2 rounded" />
              <div className="flex gap-4">
                <input type="text" placeholder="MM/YY" className="w-1/2 border p-2 rounded" />
                <input type="text" placeholder="CVV" className="w-1/2 border p-2 rounded" />
              </div>
            </div>
            <label className="flex items-center gap-2 mt-4">
              <input type="radio" name="payment" className="accent-black" />
              PAYPAL
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-black" />
              APPLE PAY
            </label>
          </div>

          <div className="mt-6 flex gap-4 items-center">
            <button className="border px-6 py-2 rounded hover:bg-gray-100 transition">BACK TO CONTACT INFO</button>
            <button className="bg-black text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition">
              MAKE PAYMENT
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Your <span className="italic">order</span></h2>

        <div className="space-y-4">
          {[1, 2].map((item, idx) => (
            <div key={idx} className="flex gap-4 border-b pb-4">
              <img
                src={`https://via.placeholder.com/100x140?text=Product+${item}`}
                alt={`Product ${item}`}
                className="w-24 h-32 object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{item === 1 ? 'RIBBED KNIT CARDIGAN' : 'CASHMERE JUMPER'}</h4>
                  <a href="#" className="text-sm underline">REMOVE</a>
                </div>
                <p className="text-sm mt-2">$ {item === 1 ? 99 : 225} USD</p>
                <p className="text-sm">QTY: 1</p>
                <p className="text-sm">SIZE: 36</p>
                <p className="text-sm">COLOR: <span className="inline-block w-3 h-3 rounded-full bg-yellow-800 ml-1"></span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span>ORDER SUMMARY</span>
            <span>$758 USD</span>
          </div>
          <div className="flex justify-between">
            <span>SHIPPING</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>TOTAL</span>
            <span>$758 USD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Payment