import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, updateBalance } from "./operations";

const initialState = {
  loadingUser: false,
  loadingRegisterUser: false,
  accessToken: null,
  theme: "day",
  userData: {
    id: null,
    email: "",
    balance: null,
    showBalanceInfo: true,
    allExpenseCategories: [],
    allIncomeCategories: [],
    transactions:[],
  },
  isLoggedIn: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadNewBalance: {
      reducer: (state, action) => {
        state.userData.balance = action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // =======================REGISTER============================
      .addCase(register.pending, (state) => {
        state.loadingRegisterUser = true;
        state.isLoggedIn = false;
        state.accessToken = null;
        state.userData.id = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loadingRegisterUser = false;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.userData.id = action.payload.id;
      })
      .addCase(register.rejected, (state) => {
        state.loadingRegisterUser = false;
        state.isLoggedIn = false;
        state.accessToken = null;
        state.userData.id = null;
      })
      // ========================================================

      // =======================LOGIN============================
      .addCase(login.pending, (state) => {
        state.loadingUser = true;
        state.isLoggedIn = false;
        state.accessToken = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loadingUser = false;
        if(action.payload.accessToken) {
          state.accessToken = action.payload.accessToken;
          state.isLoggedIn = true;
          state.userData.id = action.payload.userData.id;
          state.userData.email = action.payload.userData.email;
          state.userData.balance = action.payload.userData.balance;
          state.userData.showBalanceInfo = action.payload.userData.showBalanceInfo;
          state.userData.allExpenseCategories = action.payload.userData.expenseCategories;
          state.userData.allIncomeCategories = action.payload.userData.incomeCategories;
          state.userData.transactions = action.payload.userData.transactions;
        }
      })
      .addCase(login.rejected, (state) => {
        state.loadingUser = false;
        state.isLoggedIn = false;
        state.accessToken = null
      })
      // ========================================================

      // ====================NEW BALANCE=========================
      .addCase(updateBalance.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.userData.balance = action.payload.newBalance.balance
      })
      .addCase(updateBalance.rejected, (state) => {
        state.loadingUser = false;
      })
      // ========================================================

      // ======================LOGOUT============================
      .addCase(logout.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loadingUser = false;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.userData.id = null;
        state.userData.email = "";
        state.userData.balance = null;
        state.userData.firstLogin = true;
        state.userData.transactions = [];
      })
      .addCase(logout.rejected, (state) => {
        state.loadingUser = false;
      })
      // ========================================================
  }
});

export const {loadNewBalance} = userSlice.actions;
export const userReducer = userSlice.reducer;