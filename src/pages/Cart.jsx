import React from "react";
import useCartStore from "../store/cartStore";

function Cart() {
  const {
    cart,
    getTotalPrice,
    getTotalItems,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  return (
    <>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          Your cart is empty.
        </p>
      ) : (
        <div className="p-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start mb-6 p-4 border rounded-lg shadow-sm"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                  loading="lazy"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-700">
                    {item.description.slice(0, 100)}...
                  </p>
                  <div className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </div>
                  <div className="text-sm text-gray-500">
                    Rating: {item.rating?.rate} ({item.rating?.count} reviews)
                  </div>
                  <div className="text-lg font-bold mt-1">${item.price}</div>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>

                <div className="flex items-center gap-2 py-8 ml-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 rounded"
                  >
                    -
                  </button>
                  <span className="text-sm text-gray-700 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 text-lg font-semibold text-gray-800">
            Total: ${getTotalPrice().toFixed(2)}
          </div>
        </div>
      )}
      <div className="flex justify-center flex-col items-center p-8 rounded-lg mt-6">
        <div className="text-sm text-gray-500 ml-4">
          Items in Cart: {getTotalItems()}
        </div>
        <div className="flex justify-center  mt-6">
          <button
            onClick={clearCart}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
