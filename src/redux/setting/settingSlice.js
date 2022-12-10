import { createSlice } from "@reduxjs/toolkit";


// this is the interface for the state
const initialState = {
    x: JSON.parse(localStorage.getItem("x")) || 0,
    y: JSON.parse(localStorage.getItem("y")) || 0,
    color: "black",
}

export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        // this is the action that will be called when the user changes the x value
        changeX: (state, action) => {
            state.x = action.payload;
            localStorage.setItem("x", JSON.stringify(action.payload));
        },
        // this is the action that will be called when the user changes the y value
        changeY: (state, action) => {
            state.y = action.payload;
            localStorage.setItem("y", JSON.stringify(action.payload));
        },
        // this is the action that will be called when the user changes the color value
        changeColor: (state, action) => {
            state.color = action.payload;
        }
    }
})

export default settingSlice.reducer;