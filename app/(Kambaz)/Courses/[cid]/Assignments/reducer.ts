"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

interface Assignment {
  _id: string;
  // Add other properties of an assignment here
}

const initialState = {
  assignments: [] as Assignment[], 
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload }) => {
      state.assignments = payload;
    },

    addAssignment: (state, { payload }) => {
      state.assignments.push(payload);
    },

    deleteAssignmentLocal: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },

    updateAssignmentLocal: (state, { payload }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === payload._id ? payload : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignmentLocal,
  updateAssignmentLocal,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;