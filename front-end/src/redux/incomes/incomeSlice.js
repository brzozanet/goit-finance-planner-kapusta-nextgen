import { createSlice } from "@reduxjs/toolkit";

import { getIncomeStats, setNewIncome, deleteIncome } from "./operations";

const initialState = {
  loadingIncomes: false,
  loadingDeleteIncomes: false,
  userIncomes: [],
  monthStats: {}
};

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  extraReducers: (builder) => {
    builder
      // ===================INCOME STATS=======================
      .addCase(getIncomeStats.pending, (state) => {
        state.loadingIncomes = true;
      })
      .addCase(getIncomeStats.fulfilled, (state, action) => {
        state.loadingIncomes = false;
        state.userIncomes = action.payload.incomes;
        state.monthStats = action.payload.monthStats;
      })
      .addCase(getIncomeStats.rejected, (state) => {
        state.loadingIncomes = false;
      })
      // ========================================================

      // =====================NEW INCOME=========================
      .addCase(setNewIncome.pending, (state) => {
        state.loadingIncomes = true;
      })
      .addCase(setNewIncome.fulfilled, (state) => {
        state.loadingIncomes = false;
      })
      .addCase(setNewIncome.rejected, (state) => {
        state.loadingIncomes = false;
      })
      // ========================================================

      // =====================NEW INCOME=========================
      .addCase(deleteIncome.pending, (state) => {
        state.loadingDeleteIncomes = true;
      })
      .addCase(deleteIncome.fulfilled, (state) => {
        state.loadingDeleteIncomes = false;
      })
      .addCase(deleteIncome.rejected, (state) => {
        state.loadingDeleteIncomes = false;
      })
      // ========================================================
  }
});

export const incomesReducer = incomeSlice.reducer;