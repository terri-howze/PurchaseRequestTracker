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
    setDepartmentStore: (departmentID) => set({ division: departmentID }),
    resetDepartmentStore: () => set({ division: 0 }),

    /*
    mount state for Pr_Create Component
    */
    isPrCreateMounted: false,
    flagTrue: () => set({ isPrCreateMounted: true }),
    flagFalse: () => set({ isPrCreateMounted: false }),
    // end of Pr Create mount state and actions

    /*
   mount state for Dashboard Component
   */
    isDashboardMounted: false,
    flagDashboardTrue: () => set({ isDashboardMounted: true }),
    flagDashboardFalse: () => set({ isDashboardMounted: false }),
    // end of Dashboard mount state and actions

    /*
    mount state for loading animation
    */
    loading: false,
    flagLoadingTrue: () => set({ loading: true }),
    flagLoadingFalse: () => set({ loading: false }),
    //end of loading animation mount and actions


    /*
   Get request data for whichever department is selected 
   */
    divresultsarr: [],
    addDivisionData: (newArr) => set({ divresultsarr: newArr }),
    clearDivisionData: () => set({ divresultsarr: [] })

}))