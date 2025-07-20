import React, { useEffect, useState } from "react";
import useProductStore from "../store/productStore";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {loading ? (
        <h1 className="text-center text-xl font-medium">Loading...</h1>
      ) : (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
