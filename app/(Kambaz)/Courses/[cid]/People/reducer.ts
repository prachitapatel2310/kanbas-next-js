import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  role: string; // STUDENT / FACULTY
}

interface PeopleState {
  list: User[];
}

const initialState: PeopleState = {
  list: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
    addPerson: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
    },
    updatePerson: (state, action: PayloadAction<User>) => {
      state.list = state.list.map((u) =>
        u._id === action.payload._id ? action.payload : u
      );
    },
    removePerson: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((u) => u._id !== action.payload);
    },
  },
});

export const { setPeople, addPerson, updatePerson, removePerson } =
  peopleSlice.actions;

export default peopleSlice.reducer;
