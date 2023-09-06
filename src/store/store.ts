import { create } from "zustand";

import { itemSlice, createItemSlice } from "./slices/itemSlice";
import { Cart, createCartSlice } from "./slices/cartSlice";
import { smallStates, createSmallStates } from "./slices/smallStates";

type StoreState = itemSlice & Cart & smallStates;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createItemSlice(...a),
  ...createCartSlice(...a),
  ...createSmallStates(...a),
}));
