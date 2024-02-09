import { trusted } from "mongoose";
import { create, createStore } from "zustand";

// type State = {
//     isMounted : Boolean
//     flagTrue: () => void;
//     flagFalse: () => void;
// }

export const useStateStore = create((set) => ({
    isMounted: false,
    flagTrue: () => set({ isMounted: true}),
    flagFalse: () => set({ isMounted: false})
}))