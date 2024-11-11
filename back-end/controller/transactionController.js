import {
  newIncome,
  newExpense,
  updateBalance,
  getExpensesById,
  getIncomesById,
  getOneExpenseById,
  getOneIncomeById,
  deleteExpenseById,
  deleteIncomeById,
} from "../model/model.js";
import {
  createStats,
  filterTransactions,
  createTransactionData,
} from "../utils/utils.js";

//===========================ADD NEW INCOME===============================
export const addIncome = async (req, res, next) => {
  try {
    const { description, amount, date } = req.body;
    // console.log("REQUEST.USER: ", req.user);
    if (!description || !amount || !date)
      res
        .status(400)
        .json("Bad request (invalid request body) / No token provided");

    const result = await newIncome({
      description,
      amount,
      date,
      owner: req.user._id,
    });
    console.log(result);

    const userId = req.user._id;
    const newBalance = req.user.balance + amount;
    const showBalanceInfo = false;
    const updatedBalance = await updateBalance(
      userId,
      newBalance,
      showBalanceInfo
    );

    const transactionResponse = {
      description: result.description,
      amount: result.amount,
      date: result.date,
      category: result.category,
      id: result.id,
    };

    res
      .status(200)
      .json({ newBalance: updatedBalance.balance, transactionResponse });
  } catch (error) {
    next(error);
  }
};
//=========================================================================

//===========================ADD NEW EXPENSE===============================
export const addExpense = async (req, res, next) => {
  try {
    const { description, amount, date, category } = req.body;
    // console.log("REQUEST.USER: ", req.user);
    if (!description || !amount || !date || !category)
      return res
        .status(400)
        .json("Bad request (invalid request body) / No token provided");

    if (!req.user.expenseCategories.includes(category))
      return res.status(400).json("Bad request (invalid category)");

    const result = await newExpense({
      description,
      amount,
      date,
      category,
      owner: req.user._id,
    });
    console.log(result);

    const userId = req.user._id;
    const newBalance = req.user.balance - amount;
    const showBalanceInfo = false;
    const updatedBalance = await updateBalance(
      userId,
      newBalance,
      showBalanceInfo
    );

    const transactionResponse = {
      description: result.description,
      amount: result.amount,
      date: result.date,
      category: result.category,
      id: result.id,
    };
    res
      .status(200)
      .json({ newBalance: updatedBalance.balance, transactionResponse });
  } catch (error) {
    next(error);
  }
};
//=========================================================================

//===========================GET EXPENSE STATS===============================
export const getExpenseStats = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const expenses = await getExpensesById(userId);
    console.log({ expenses });
    const monthStats = createStats(expenses);
    console.log({ monthStats });
    return res.status(200).json({ expenses, monthStats });
  } catch (error) {
    next(error);
  }
};
//==========================================================================

//===========================GET INCOME STATS===============================
export const getIncomeStats = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const incomes = await getIncomesById(userId);
    console.log({ incomes });
    const monthStats = createStats(incomes);
    console.log({ monthStats });
    return res.status(200).json({ incomes, monthStats });
  } catch (error) {
    next(error);
  }
};
//============================================================================

//===========================REMOVE TRANSACTION===============================
export const deleteTransaction = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const transactionId = req.params.transactionId;
    console.log({ userId, transactionId });

    const expense = await getOneExpenseById(transactionId, userId);
    console.log({ expense });
    if (expense) {
      await deleteExpenseById(transactionId);
      const newBalance = req.user.balance + expense.amount;
      const updatedBalance = await updateBalance(userId, newBalance);
      console.log({ updatedBalance });
      return res.status(200).json({ newBalance: updatedBalance.balance });
    }

    const income = await getOneIncomeById(transactionId, userId);
    console.log({ income });
    if (income) {
      await deleteIncomeById(transactionId);
      const newBalance = req.user.balance - income.amount;
      const updatedBalance = await updateBalance(userId, newBalance);
      console.log({ updatedBalance });
      return res.status(200).json({ newBalance: updatedBalance.balance });
    }

    if (!expense && !income) {
      return res
        .status(400)
        .json("Bad request (invalid id) / No token provided");
    }
  } catch (error) {
    next(error);
  }
};
//================================================================================

//===========================GET EXPENSE CATEGORIES===============================
// export const getExpenseCategories = async (req, res, next) => {
//   try {
//     const userId = req.user._id;
//     const expenses = await getExpensesById(userId);

//     const uniqueExpenses = [];
//     expenses.forEach((el) => {
//       if (uniqueExpenses.indexOf(el.category) < 0) {
//         uniqueExpenses.push(el.category);
//       }
//     });

//     return res.status(200).json({ uniqueExpenses });
//   } catch (error) {
//     next(error);
//   }
// };

export const getExpenseCategories = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const {period} = req.body;
    const expenses = await getExpensesById(userId);

    const expensesPeriodDate = filterTransactions(period, expenses);

    const uniqueExpenses = [];
    expensesPeriodDate.forEach((el) => {
      if (uniqueExpenses.indexOf(el.category) < 0) {
        uniqueExpenses.push(el.category);
      }
    });

    return res.status(200).json({ uniqueExpenses });
  } catch (error) {
    next(error);
  }
};
//===============================================================================

//===========================GET INCOME CATEGORIES===============================
// export const getIncomeCategories = async (req, res, next) => {
//   try {
//     const userId = req.user._id;
//     const incomes = await getIncomesById(userId);

//     const uniqueIncomes = [];
//     incomes.forEach((el) => {
//       if (uniqueIncomes.indexOf(el.category) < 0) {
//         uniqueIncomes.push(el.category);
//       }
//     });

//     return res.status(200).json({ uniqueIncomes });
//   } catch (error) {
//     next(error);
//   }
// };

export const getIncomeCategories = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const {period} = req.body;
    const incomes = await getIncomesById(userId);

    const incomesPeriodDate = filterTransactions(period, incomes);

    const uniqueIncomes = [];
    incomesPeriodDate.forEach((el) => {
      if (uniqueIncomes.indexOf(el.category) < 0) {
        uniqueIncomes.push(el.category);
      }
    });

    return res.status(200).json({ uniqueIncomes });
  } catch (error) {
    next(error);
  }
};
//================================================================================

//===========================GET PERIOD DATE TRANSACTIONS==========================
export const getPeriodDateTransactions = async (req, res, next) => {
  try {
    const userId = req.user._id;
    // const period = "2024-05";
    const {period} = req.body;
    // console.log({period});
    const expenses = await getExpensesById(userId);
    const incomes = await getIncomesById(userId);

    const expensesPeriodDate = filterTransactions(period, expenses);
    const incomesPeriodDate = filterTransactions(period, incomes);
    
    const transactionData = createTransactionData(
      expensesPeriodDate,
      incomesPeriodDate
    );

    return res.status(200).json({ transactionData });
  } catch (error) {
    next(error);
  }
};
//===============================================================================
