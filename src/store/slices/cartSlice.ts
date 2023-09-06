import { StateCreator } from "zustand";

import { Items } from "./itemSlice";

export interface CartItems {
  order_id: string;
  date: string;
  food: {
    food_id: string;
    name: string;
    description: string;
    price: number;
  };
  quantity: number;
  totalprice: number;
}

export interface Cart {
  cart: CartItems[];
  addItems: () => void;
  removeItems: () => void;
}

export const createCartSlice: StateCreator<Cart> = (set) => ({
  cart: [],
  addItems() {},
  removeItems() {},
});
