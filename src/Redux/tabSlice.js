import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: {
    data: [],
    company: "TOMMY",
  },
  reducers : {
    SETDATA : (state, action) =>{
        state.data = action.payload
    },
    SETCOMPANY : (state, action)=>{
        state.company = action.payload
    }
  }
});


export const {SETDATA, SETCOMPANY} = tabSlice.actions
export default tabSlice.reducer