import { trusted } from "mongoose";
import { create, createStore } from "zustand";

// type State = {
//     isMounted : Boolean
//     flagTrue: () => void;
//     flagFalse: () => void;
// }
2
export const useStateStore = create((set) => ({
    division: 0,
    isMounted: false,
    loading: false,


    flagTrue: () => set({ isMounted: true}),
    flagFalse: () => set({ isMounted: false}),
    setDepartmentStore: (departmentID) => set({division: departmentID}),
    resetDepartmentStore: () => set({division: 0}),
    flagLoadingTrue: () => set({ loading: true}),
    flagLoadingFalse: () => set({ loading: false}),

}))