import React from "react";
import Slider from "react-slick";
import useProductStore from "../store/productStore";
import ProductCard from "./ProductCard";

function ProductSlider() {
  const { products, loading } = useProductStore();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="px-12 py-12  bg-gray-100 ">
      <Slider {...settings}>
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="px-20">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
