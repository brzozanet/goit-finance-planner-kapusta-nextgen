import { useSelector } from "react-redux";
import { selectExpenses, selectMonthStats, selectExpensesLoading, selectDeleteExpensesLoading } from "../redux/expenses/selectors";

const useExpenses = () => {
  const expenses = useSelector(selectExpenses);
  const expensesMonthStats = useSelector(selectMonthStats);
  const expensesLoading = useSelector(selectExpensesLoading);
  const expensesDeleteLoading = useSelector(selectDeleteExpensesLoading);

  return {
    expenses,
    expensesMonthStats,
    expensesLoading,
    expensesDeleteLoading
  };
};

export default useExpenses;