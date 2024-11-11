import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { loadNewBalance } from "../user/userSlice";


const getIncomeStats = createAsyncThunk(
  "incomes/getIncomeStats",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get("transaction/income");
      // console.log("GET INCOMES STATS ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setNewIncome = createAsyncThunk(
  "incomes/setNewIncome",
  async (data, thunkAPI) => {
    const {description, amount, date, category} = data;
    // console.log("AMOUNT: ", amount, typeof(amount));
    try {
      const res = await axios.post("transaction/income", {description, amount:Number(amount), date, category});
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(getIncomeStats());
      // console.log("SET NEW INCOME ACTION: ", res);
      return 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteIncome = createAsyncThunk(
  "incomes/deleteIncome",
  async (transactionId, thunkAPI) => {
    try {
      const res = await axios.delete(`transaction/${transactionId}`);
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(getIncomeStats());
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {getIncomeStats, setNewIncome, deleteIncome}