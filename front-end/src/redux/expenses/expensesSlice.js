import { createSlice } from "@reduxjs/toolkit";

import { getExpenseStats, setNewExpense, deleteExpense } from "./operations";

const initialState = {
  loadingExpenses: false,
  loadingDeleteExpenses: false,
  userExpenses: [],
  monthStats: {}
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  extraReducers: (builder) => {
    builder
      // ===================EXPENSES STATS=======================
      .addCase(getExpenseStats.pending, (state) => {
        state.loadingExpenses = true;
      })
      .addCase(getExpenseStats.fulfilled, (state, action) => {
        state.loadingExpenses = false;
        state.userExpenses = action.payload.expenses;
        state.monthStats = action.payload.monthStats;
      })
      .addCase(getExpenseStats.rejected, (state) => {
        state.loadingExpenses = false;
      })
      // ========================================================

      // ====================NEW EXPENSE=========================
      .addCase(setNewExpense.pending, (state) => {
        state.loadingExpenses = true;
      })
      .addCase(setNewExpense.fulfilled, (state) => {
        state.loadingExpenses = false;
      })
      .addCase(setNewExpense.rejected, (state) => {
        state.loadingExpenses = false;
      })
      // ========================================================

      // ===================DELETE EXPENSE=======================
      .addCase(deleteExpense.pending, (state) => {
        state.loadingDeleteExpenses = true;
      })
      .addCase(deleteExpense.fulfilled, (state) => {
        state.loadingDeleteExpenses = false;
      })
      .addCase(deleteExpense.rejected, (state) => {
        state.loadingDeleteExpenses = false;
      })
      // ========================================================
  }
});

export const expensesReducer = expensesSlice.reducer;