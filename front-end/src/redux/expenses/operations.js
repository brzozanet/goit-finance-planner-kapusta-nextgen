import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { loadNewBalance } from "../user/userSlice";


const getExpenseStats = createAsyncThunk(
  "expenses/getExpensesStats",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get("transaction/expense");
      // console.log("GET EXPENSES STATS ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setNewExpense = createAsyncThunk(
  "expenses/setNewExpense",
  async (data, thunkAPI) => {
    const {description, amount, date, category} = data;
    // console.log("AMOUNT: ", amount, typeof(amount));
    try {
      const res = await axios.post("transaction/expense", {description, amount:Number(amount), date, category});
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(getExpenseStats());
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (transactionId, thunkAPI) => {
    try {
      const res = await axios.delete(`transaction/${transactionId}`);
      // console.log(res.data.newBalance);
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(getExpenseStats());
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 

export {getExpenseStats, setNewExpense, deleteExpense}