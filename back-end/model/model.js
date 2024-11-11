import { User } from "./schema/user.js";
import { Income, Expense } from "./schema/transaction.js";


// =================================USER=========================================
export const findUserByEmail = (email) => User.findOne({email});
export const createUser = ({password, email}) => User.create({password, email});
export const updateToken = (id, token) => User.findByIdAndUpdate({_id: id}, token, {new: true});
export const updateBalance = (id, balance, showBalanceInfo) => User.findByIdAndUpdate({_id: id}, {balance, showBalanceInfo}, {new: true});

// =============================TRANSACTIONS=====================================
export const newIncome = ({description, amount, date, owner}) => Income.create({description, amount, date, owner});
export const newExpense = ({description, amount, date, category, owner}) => Expense.create({description, amount, date, category, owner});
export const getExpensesById = (userId) => Expense.find({owner:userId});
export const getIncomesById = (userId) => Income.find({owner:userId});
export const getOneExpenseById = (transactionId, userId) => Expense.findOne({_id:transactionId, owner:userId});
export const getOneIncomeById = (transactionId, userId) => Income.findOne({_id:transactionId, owner:userId});
export const deleteExpenseById = (transactionId) => Expense.findByIdAndDelete(transactionId);
export const deleteIncomeById = (transactionId) => Income.findByIdAndDelete(transactionId);