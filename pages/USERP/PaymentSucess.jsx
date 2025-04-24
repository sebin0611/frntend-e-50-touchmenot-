import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-6 text-center">
      <div className="text-green-600 text-sm font-medium mb-4">Complete</div>

      {/* Tick Icon */}
      <div className="border-2 border-green-600 rounded-full p-4 mb-6">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Main Message */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Thank you.
        <br />
        Your request was successful
      </h1>

      <p className="text-gray-500 text-sm mb-8 max-w-sm">
        Your money has been sent and will be credited to the payee's account immediately,
        subject to our standard checks.
      </p>

      {/* From Account */}
      <div className="text-left w-full max-w-md mb-4">
        <p className="text-gray-500 text-sm mb-1">From</p>
        <p className="font-bold text-gray-900">1st Account</p>
        <p className="text-sm text-gray-600">40-47-73 61053426</p>
      </div>

      {/* To Account */}
      <div className="text-left w-full max-w-md">
        <p className="text-gray-500 text-sm mb-1">To</p>
        <p className="font-bold text-gray-900">Sprotbrough Riverboat Ltd</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
