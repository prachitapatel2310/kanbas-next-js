import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  userId: string;
  courseId: string;
}

interface EnrollmentsState {
  list: Enrollment[];
}

const initialState: EnrollmentsState = {
  list: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.list = action.payload;
    },
    addEnrollment: (state, action: PayloadAction<Enrollment>) => {
      state.list.push(action.payload);
    },
    removeEnrollment: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((e) => e._id !== action.payload);
    },
  },
});

export const { setEnrollments, addEnrollment, removeEnrollment } =
  enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
