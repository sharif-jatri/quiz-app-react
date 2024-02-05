import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            console.log('state', state.isAuthenticated)
        },
        logout: (state) => {
            state.isAuthenticated = false;
            console.log('state', state.isAuthenticated)
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;