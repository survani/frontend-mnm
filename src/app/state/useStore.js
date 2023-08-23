import { create } from "zustand";
import { createMythSlice } from "../state/slices/createMythSlice";
import { getMythSlice } from "../state/slices/getMythSlice";

export const useStore = create((...a) => ({
  ...createMythSlice(...a),
  ...getMythSlice(...a),
}));
