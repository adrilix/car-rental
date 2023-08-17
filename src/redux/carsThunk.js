import {createAsyncThunk} from "@reduxjs/toolkit"
import { getCarsRequest } from "services/apiCars";

export const getCarsThunk = createAsyncThunk("cars/getCarsThunk",
    async (_, { rejectWithValue }) => {
        try {
            const cars = await getCarsRequest();
            // console.log(cars);
            return cars;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
;