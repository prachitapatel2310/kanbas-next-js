import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as any[], // [{ userId, courseId }]
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const existing = state.enrollments.find(
        (e) => e.userId === userId && e.courseId === courseId
      );
      if (!existing) state.enrollments.push({ userId, courseId });
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.userId === userId && e.courseId === courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
