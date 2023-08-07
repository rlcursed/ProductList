import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { PRODUCTS_URL } from '../../constants/ApiConstants';

export interface CounterState {
    products: number[];
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try{
            const res = await axios(`${PRODUCTS_URL}`);
            return res.data;
        }catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
)

export const counterSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
        })
        }
    }
);

export default counterSlice.reducer
