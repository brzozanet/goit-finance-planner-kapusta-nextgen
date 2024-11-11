import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getTransactionsData = createAsyncThunk(
  "reports/getTransactionsData",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("transaction/period-data", {period:data}); 
      // console.log("GET TRANSACTIONS DATA ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getExpenseCategoriesByPeriod = createAsyncThunk(
  "reports/getExpenseCategoriesByPeriod",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("transaction/expense-categories", {period:data}); 
      // console.log("GET EXPENSE CATEGORIES BY PERIOD ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getIncomeCategoriesByPeriod = createAsyncThunk(
  "reports/getIncomeCategoriesByPeriod",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("transaction/income-categories", {period:data}); 
      // console.log("GET INCOME CATEGORIES BY PERIOD ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {getTransactionsData, getExpenseCategoriesByPeriod, getIncomeCategoriesByPeriod} 