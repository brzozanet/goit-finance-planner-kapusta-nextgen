import { Schema, model } from "mongoose";

const expenseSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});


export const Expense = model("expense", expenseSchema);


const incomeSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  category: {
    type: String,
    default: "Salary"
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});


export const Income = model("income", incomeSchema);