import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* -------------------------
   🔵 Module Type Definition
-------------------------- */
export interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: any[];
  editing?: boolean;
}

/* -------------------------
   🔵 State Type
-------------------------- */
interface ModulesState {
  modules: Module[];
}

/* -------------------------
   🔵 Initial State
-------------------------- */
const initialState: ModulesState = {
  modules: [],
};

/* -------------------------
   🔵 Slice
-------------------------- */
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    /* Set modules after fetching from server */
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    /* Add new module (after POST) */
    addModule: (state, { payload: newModule }) => {
      state.modules = [...state.modules, newModule];
    },

    /* Delete module */
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },

    /* Update module (rename, save edits, etc.) */
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m._id === module._id ? module : m
      );
    },

    /* Enable inline editing mode */
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

/* -------------------------
   🔵 Exports
-------------------------- */
export const {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  editModule,
} = modulesSlice.actions;

export default modulesSlice.reducer;
