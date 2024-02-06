import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userDetails: {
        name: '',
        roleType: ''
    }
};

export const saveProfile = createAsyncThunk(
    "auth/saveProfile",
    async (auth) => {
        console.log(auth, 'save profile')
        initialState.isAuthenticated = true;
        initialState.userDetails = auth;
        // const res = await getUserProfile(auth);
        return auth;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.isAuthenticated = true;
            state.userDetails = payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userDetails = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveProfile.fulfilled, (state, action) => {
            console.log('extra', action.payload)
            state.userDetails = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;