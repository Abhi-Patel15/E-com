import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState"
export const slice = createSlice ({
    name:"ecomProject",
    initialState,
    reducers: {
        loginUser: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setLoginUser: (state, action ) => {
            state.Login = action.payload;
        },
    },
});

export const {
    loginUser,
    setLoginUser
} = slice.actions;

export default slice.reducer;