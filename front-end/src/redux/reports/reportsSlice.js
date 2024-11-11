import { createSlice } from "@reduxjs/toolkit";

import { getTransactionsData, getExpenseCategoriesByPeriod, getIncomeCategoriesByPeriod } from "./operations";

const initialState = {
  loadingReports: false,
  incomes: {},
  expenses: {},
  incomeCategories: [],
  expenseCategories: [],
  chartData: {}
};
 
const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    createChartData: {
      reducer: (state, action) => {
        if(state.incomes.incomesData[action.payload]) {
          state.chartData = state.incomes.incomesData[action.payload]
        }else if(state.expenses.expensesData[action.payload]) {
          state.chartData = state.expenses.expensesData[action.payload]
        }else{
          state.chartData = {}
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
    // ==================GET TRANSACTIONS BY PERIOD====================
      .addCase(getTransactionsData.pending, (state) => {
        state.loadingReports = true;
      })
      .addCase(getTransactionsData.fulfilled, (state, action) => {
        state.loadingReports = false;
        state.incomes = action.payload.transactionData.incomes;
        state.expenses = action.payload.transactionData.expenses;
      })
      .addCase(getTransactionsData.rejected, (state) => {
        state.loadingReports = false;
      })
    // ================================================================

    // ===============GET EXPENSE CATEGORIES BY PERIOD=================
    .addCase(getExpenseCategoriesByPeriod.pending, (state) => {
      state.loadingReports = true;
    })
    .addCase(getExpenseCategoriesByPeriod.fulfilled, (state, action) => {
      state.loadingReports = false;
      state.expenseCategories = action.payload.uniqueExpenses;
    })
    .addCase(getExpenseCategoriesByPeriod.rejected, (state) => {
      state.loadingReports = false;
    })
    // ===============================================================

    // ===============GET INCOME CATEGORIES BY PERIOD=================
    .addCase(getIncomeCategoriesByPeriod.pending, (state) => {
      state.loadingReports = true;
    })
    .addCase(getIncomeCategoriesByPeriod.fulfilled, (state, action) => {
      state.loadingReports = false;
      state.incomeCategories = action.payload.uniqueIncomes;
    })
    .addCase(getIncomeCategoriesByPeriod.rejected, (state) => {
      state.loadingReports = false;
    })
    // ==============================================================
  },
});

export const {createChartData} = reportsSlice.actions;
export const reportsReducer = reportsSlice.reducer;
