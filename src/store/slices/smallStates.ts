import { StateCreator } from "zustand";

export interface smallStates {
  details: boolean;
  setDetails: (val: boolean) => void;
}

export const createSmallStates: StateCreator<smallStates> = (set) => ({
  details: false,
  setDetails(val: boolean) {
    set({ details: val });
  },
});
