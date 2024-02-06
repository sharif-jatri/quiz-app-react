import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userDetails: {
            username: '',
        }
    },
    reducers: {
        login: (state, {payload}) => {
            state.isAuthenticated = true;
            state.userDetails = payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userDetails = {};
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;