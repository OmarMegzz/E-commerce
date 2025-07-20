import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const existingItem = get().cart.find((item) => item.id === product.id);

    if (existingItem) {
      // لو المنتج موجود بالفعل، زود الـ quantity
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    } else {
      // لو مش موجود، ضيفه لأول مرة
      set((state) => ({
        cart: [...state.cart, { ...product, quantity: 1 }],
      }));
    }
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },
  clearCart: () => set(() => ({ cart: [] })),
  getTotalPrice: () =>
    get().cart.reduce((total, product) => {
      const quantity = product.quantity || 1;
      return total + product.price * quantity;
    }, 0),

  getTotalItems: () =>
    get().cart.reduce((total, product) => total + product.quantity, 0),
  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { cart: updatedCart };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
