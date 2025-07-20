import React, { useState } from "react";

function ProductCard({ product }) {
  const { id, image, title, description, category, rating, price } = product;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      <p className="text-sm text-gray-700 mb-2">
        {isExpanded ? description : description.slice(0, 100) + "..."}
      </p>

      <button
        onClick={toggleDescription}
        className="text-blue-500 text-sm mb-2 hover:underline"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>

      <div className="text-sm text-gray-500 mb-1 capitalize">{category}</div>

      <div className="text-sm text-gray-500 mb-2">
        Rating: {rating.rate} ({rating.count} reviews)
      </div>

      <div className="text-lg font-bold">${price}</div>
    </div>
  );
}

export default ProductCard;
