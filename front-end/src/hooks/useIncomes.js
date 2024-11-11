import { useSelector } from "react-redux";
import {
  selectIncomes,
  selectMonthStats,
  selectIncomesLoading,
  selectDeleteIncomesLoading
} from "../redux/incomes/selectors";

const useIncomes = () => {
  const incomes = useSelector(selectIncomes);
  const incomesMonthStats = useSelector(selectMonthStats);
  const incomesLoading = useSelector(selectIncomesLoading);
  const incomesDeleteLoading = useSelector(selectDeleteIncomesLoading);

  return {
    incomes,
    incomesMonthStats,
    incomesLoading,
    incomesDeleteLoading
  };
};

export default useIncomes;
