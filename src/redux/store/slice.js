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
        
        //dasahbord
        counOfData: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setCounOfData: (state, action ) => {
            state.countOfDatas = action.payload;
        },

        graphOfData: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setGraphOfData: (state, action ) => {
            state.GraphOfDatas = action.payload;
        },
        
        registrationOfTabel: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setRegistrationOfTabel: (state, action ) => {
            state.RegistrationDatas = action.payload;
        },

        listOfTabel: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setListOfTabel: (state, action ) => {
            state.ListOfOrders = action.payload;
        },

        //category
        addCategory: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setAddCategory: (state, action ) => {
            state.AddCategory = action.payload;
        },
        listOfCategory: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setListOfCategory: (state, action ) => {
            state.ListOfCategroy = action.payload;
        },
        editCategory: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setEditCategory: (state, action ) => {
            state.EditCategroy = action.payload;
        },
        deleteCategory: (state , action) => {
           return {
                ...state,
                action,
            };
        },
        setDeleteCategory: (state, action ) => {
            state.DeleteCategroy = action.payload;
        },
        //PRODUCT

        addProduct: (state , action) => {
            return {
                ...state,
                action,
            };
        },
        setAddProduct: (state, action ) => {
            state.DeleteCategroy = action.payload;
        },
    },
});

export const {
    loginUser,
    setLoginUser,
    listOfTabel,
    setListOfTabel,
    counOfData,
    setCounOfData,
    graphOfData,
    setGraphOfData,
    registrationOfTabel,
    setRegistrationOfTabel,
    addCategory,
    setAddCategory,
    listOfCategory,
    setListOfCategory,
    editCategory,
    setEditCategory,
    deleteCategory,
    setDeleteCategory,
    
} = slice.actions;

export default slice.reducer;