import { Schema, model } from "mongoose";

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  accessToken: {
    type: String,
    default: null,
  },
  showBalanceInfo: {
    type: Boolean,
    default: true
  },
  balance: {
    type: Number,
    default: 0
  },
  expenseCategories: {
    type: Array,
    default: ["Transport", "Products", "Health", "Alcohol", "Entertainment", "Housing", "Technique", "Communal", "Communication", "Sports", "Hobbies", "Education", "Other"]
  },
  incomeCategories: {
    type: Array,
    default: ["Salary"]
  }
});


export const User = model("user", userSchema);