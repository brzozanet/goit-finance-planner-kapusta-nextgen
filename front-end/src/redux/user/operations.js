import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "http://kapusta-api-01.tomasz-bielecki.pl/";


const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};


const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const res = await axios.post("auth/register", { email, password });
      // console.log("REGISTRATION ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const res = await axios.post("auth/login", { email, password });
      // console.log("LOGIN ACTION: ", res);
      setAuthHeader(res.data.accessToken);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateBalance = createAsyncThunk(
  "user/updateBalance",
  async (newBalance, thunkAPI) => {
    try {
      const res = await axios.patch("user/balance", { newBalance });
      // console.log("UPDATE BALANCE ACTION: ", res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    try {
      await axios.post("auth/logout");
      clearAuthHeader()
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export {register, login, logout, updateBalance} 