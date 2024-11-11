import { useSelector } from "react-redux";
import { selectIncomesReport, selectExpensesReport, selectIncomesCategories, selectExpensesCategories, selectLoading, selectChartData } from "../redux/reports/selectors";

const useReports = () => {
  const incomesReport = useSelector(selectIncomesReport);
  const expensesReport = useSelector(selectExpensesReport);
  const incomesCategories = useSelector(selectIncomesCategories);
  const expensesCategories = useSelector(selectExpensesCategories);
  const chartData = useSelector(selectChartData);
  const loadingReports = useSelector(selectLoading);

  return {
    incomesReport,
    expensesReport,
    incomesCategories,
    expensesCategories,
    chartData,
    loadingReports
  };
};

export default useReports;