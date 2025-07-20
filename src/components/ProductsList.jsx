import React, { useEffect, useState } from "react";
import useProductStore from "../store/productStore";

function ProductsList() {
  const { products, fetchProducts, loading } = useProductStore();
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const toggleDescription = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {loading ? (
        <h1 className="text-center text-xl font-medium">Loading...</h1>
      ) : (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
                loading="lazy"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

              <p className="text-sm text-gray-700 mb-2">
                {expandedCards[product.id]
                  ? product.description
                  : product.description.slice(0, 100) + "..."}
              </p>

              <button
                onClick={() => toggleDescription(product.id)}
                className="text-blue-500 text-sm mb-2 hover:underline"
              >
                {expandedCards[product.id] ? "Show Less" : "Read More"}
              </button>

              <div className="text-sm text-gray-500 mb-1 capitalize">
                {product.category}
              </div>
              <div className="text-sm text-gray-500 mb-2">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
              <div className="text-lg font-bold ">${product.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
