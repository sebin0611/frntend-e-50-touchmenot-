import React from "react";

function ProductCardSkeletons() {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      {[1, 2, 3].map((index) => (
        <div key={index} className="skeleton h-40 w-60 rounded-lg"></div>
      ))}
    </div>
  );
}

export default ProductCardSkeletons;