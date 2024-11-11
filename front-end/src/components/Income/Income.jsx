import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import useWindowDimensions from "../../hooks/useWindowDimensions";

// HOOKS:
import useAuth from "../../hooks/useAuth";
import useIncomes from "../../hooks/useIncomes";

// REDUX ACTIONS:
import {
  getIncomeStats,
  setNewIncome,
  deleteIncome
} from "../../redux/incomes/operations";

import Balance from "../Balance/Balance";
import ReportsNav from "../ReportsNav/ReportsNav";
import ExpensesIncomeNav from "../ExpensesIncomeNav/ExpensesIncomeNav";
import ExpensesIncomeForm from "../ExpensesIncomeForm/ExpensesIncomeForm";
import IncomeTable from "../Table/IncomesTable";
import ExpensesIncomeSummary from "../ExpensesIncomeSummary/ExpensesIncomeSummary";

const Income = () => {
  const { incomes, incomesMonthStats } = useIncomes();
  const {userData} = useAuth();
  const { width } = useWindowDimensions();
  // console.log("Incomes: ", { incomes, incomesMonthStats });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomeStats());
  }, [dispatch]);

  if (width < 574) {
    return (
      <>
        <h2>INCOMES TAB - MOBILE VIEW</h2>
        <Link to="/transactions">transactions</Link>
        <ExpensesIncomeForm categories={userData.allIncomeCategories} callback={setNewIncome} actionType="income" />
      </>
    );
  }
  return (
    <div>
      <h2>INCOMES TAB</h2>
      <div className="expenses-page__header">
        <Balance />
        <ReportsNav />
      </div>
      <ExpensesIncomeNav />
      <ExpensesIncomeForm categories={userData.allIncomeCategories} callback={setNewIncome} actionType="income" />
      <div className="expenses-income">
        <IncomeTable deleteIncome={deleteIncome}/>
        <ExpensesIncomeSummary incomesMonthStats={incomesMonthStats} />
      </div>
    </div>
  );
};

export default Income;
