import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// REDUX HOOKS:
import useReports from "../../hooks/useReports";

// REDUX ACTIONS:
import { getTransactionsData, getExpenseCategoriesByPeriod, getIncomeCategoriesByPeriod } from "../../redux/reports/operations";

// COMPONENTS:
import Balance from "../../components/Balance/Balance";
import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
import BalanceLabel from "../../components/BalanceLabel/BalanceLabel";
import ReportsCategoriesNav from "../../components/ReportsCategoriesNav/ReportsCategoriesNav";
import CategoryList from "../../components/CategoryList/CategoryList";
import Chart from "../../components/Chart/Chart";

const ReportsPage = () => {
  const [currentPeriod, setCurrentPeriod] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });

  const { incomesReport, expensesReport, incomesCategories, expensesCategories } = useReports();
  // console.log({ incomesReport, expensesReport, incomesCategories, expensesCategories });

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTransactionsData(currentPeriod));
    dispatch(getExpenseCategoriesByPeriod(currentPeriod));
    dispatch(getIncomeCategoriesByPeriod(currentPeriod));
  }, [dispatch, currentPeriod]);
  return (
    <>
      <div className="reports-header">
        <Link to="/transactions/expenses">Main page</Link>
        <Balance />
        <CurrentPeriod currentPeriod={currentPeriod} setCurrentPeriod={setCurrentPeriod} />
      </div>
      <div className="reports-content">
        <BalanceLabel incomeTotal={incomesReport.total} expenseTotal={expensesReport.total}/>
        <ReportsCategoriesNav />
        <div className="category-list">
          <CategoryList incomesCategories={incomesCategories} expensesCategories={expensesCategories}/>
        </div>
        <Chart />
      </div>
    </>
  );
}; 

export default ReportsPage;
