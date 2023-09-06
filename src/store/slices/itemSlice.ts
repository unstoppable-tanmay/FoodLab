import { StateCreator } from "zustand";

export interface Items {
  id: string;
  name: string;
  description: string;
  price: number;
  catagory: string;
  image: string;
  ingredients: string[];
  calories: number;
  rating: number;
}

export interface itemSlice {
  items: Items[];
  fetchItems: () => void;
}

export const createItemSlice: StateCreator<itemSlice> = (set) => ({
  items: [],
  fetchItems: async () => {
    // const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    // set({ products: await res.json() })
  },
});
