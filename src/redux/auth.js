import { createSlice } from "@reduxjs/toolkit";

const authenticated = JSON.parse(localStorage.getItem('is-authenticated'));
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: authenticated?.isAuthenticated || false,
        userDetails: {
            username: authenticated?.userDetails?.username || '',
        }
    },
    reducers: {
        login: (state, {payload}) => {
            state.isAuthenticated = true;
            state.userDetails = payload;
            localStorage.setItem('is-authenticated', JSON.stringify({
                isAuthenticated: true,
                userDetails: payload
            }));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userDetails = {};
            localStorage.setItem('is-authenticated', JSON.stringify({
                isAuthenticated: false,
                userDetails: {}
            }))
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;