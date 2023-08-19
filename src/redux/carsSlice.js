import { createSlice } from "@reduxjs/toolkit"
import { getCarsThunk } from "./carsThunk";

const initialState = {
    cars: [],
    filteredCars: [],
    loading: false,
    currentPage: 1,
    perPage: 8,
    error: null,
    favorite: [],
    formData: '',
};

const carsSlice = createSlice({
    name: 'cars', 
    initialState,
    reducers: {
        addCarToFavorite: (state, action) => {
            state.favorite = [...state.favorite, action.payload];
        },
        removeCarOnFavorite: (state, action) => {
            state.favorite=state.favorite.filter(
                car => car.id !== action.payload);
                
        },
        nextPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setFindCarsInCatalog: (state, action) => {
            state.formData = action.payload;
            state.filteredCars=state.cars.filter((car)=>{
                return(
                    car.make.toLowerCase()===action.payload.make.toLowerCase().trim()
                    &&Number(action.payload.rentalPrice.split('').splice(1).join(''))>=Number(car.rentalPrice.split('').splice(1).join(''))
                    &&Number(action.payload.mileageFrom)<=car.mileage
                    &&car.mileage<=Number(action.payload.mileageTo)
                    )})
        },

        resetFindForm: (state, action) => {
            state.filteredCars = action.payload;
            state.formData = action.payload;
        },
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

export const { nextPage , addCarToFavorite, setFindCarsInCatalog, resetFindForm,removeCarOnFavorite} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;