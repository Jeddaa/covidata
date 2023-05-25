import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../consts';

const initialState = {
  covidData: [],
  globalData: [],
  rawData: [],
  isLoading: true,
  isError: undefined,
};

export const fetchData = createAsyncThunk('fetchdata', async (rejectedWithValue) => {
  try {
    const response = await axios.get(URL);
    const { summaryStats, rawData } = response.data;
    return { summaryStats, rawData };
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      const countries = payload.rawData.map((country) => country.Country_Region);
      const uniqueCountries = Array.from(new Set(countries.map((country) => country)));
      state.covidData = uniqueCountries;
      state.globalData = payload.summaryStats.global;
      state.rawData = payload.rawData;
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default dataSlice.reducer;
