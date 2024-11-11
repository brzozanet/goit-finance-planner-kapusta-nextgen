import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import useWindowDimensions from "../../hooks/useWindowDimensions";

// HOOKS:
import useAuth from "../../hooks/useAuth";
import useExpenses from "../../hooks/useExpenses";

// REDUX ACTIONS:
import {
  getExpenseStats,
  setNewExpense,
  deleteExpense
} from "../../redux/expenses/operations";

// COMPONENTS:
import Balance from "../Balance/Balance";
import ReportsNav from "../ReportsNav/ReportsNav";
import ExpensesIncomeNav from "../ExpensesIncomeNav/ExpensesIncomeNav";
import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import ExpensesTable from "../Table/ExpensesTable";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

const Expenses = () => {
  const { expensesMonthStats } = useExpenses();
  const {userData} = useAuth();
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseStats());
  }, [dispatch]);

  if (width < 574) {
    return (
      <>
        <h2>EXPENSES TAB - MOBILE VIEW</h2>
        <Link to="/transactions">transactions</Link>
        <ExpensesIncomeForm categories={userData.allExpenseCategories} callback={setNewExpense} actionType="expense" />
      </>
    );
  }
  return (
      <div>
        <h2>EXPENSES TAB</h2>
        <div className="expenses-page__header">
          <Balance />
          <ReportsNav />
        </div>
        <ExpensesIncomeNav />
        <ExpensesIncomeForm categories={userData.allExpenseCategories} callback={setNewExpense} actionType="expense" />
        <div className="expenses-income">
          <ExpensesTable deleteExpense={deleteExpense}/>
          <ExpensesIncomeSummary expensesMonthStats={expensesMonthStats} />
        </div>
      </div>
  );
};

export default Expenses;
