import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ loading: false });
    }
  },
}));

export default useProductStore;
