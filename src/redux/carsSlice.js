import { createSlice } from "@reduxjs/toolkit"
import { getCarsThunk } from "./carsThunk";

const initialState = {
    cars: [],
    loading: false,
    currentPage: 1,
    perPage: 8,
    error: null,
    favorite: [],
};

const carsSlice = createSlice({
    name: 'cars', 
    initialState,
    reducers: {
        addCarToFavorite: (state, action) => {
            state.favorite = state.favorite.push(action.payload);
        },
        nextPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },


    extraReducers: builder =>
        builder
            //---------------------- Get cars ------------------------------
            .addCase(getCarsThunk.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCarsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = action.payload;
            })
            .addCase(getCarsThunk.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
            })
})

export const { nextPage , addCarToFavorite} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;