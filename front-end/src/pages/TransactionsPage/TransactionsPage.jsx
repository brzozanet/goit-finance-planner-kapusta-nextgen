import { Navigate } from "react-router-dom";

// HOOKS:
import useWindowDimensions from "../../hooks/useWindowDimensions";

// COMPONENTS:
import Balance from "../../components/Balance/Balance";
import ReportsNav from "../../components/ReportsNav/ReportsNav";
import ExpensesIncomeNav from "../../components/ExpensesIncomeNav/ExpensesIncomeNav";
import ExpensesIncomeTable from "../../components/Table/ExpensesIncomeTable";

const TransactionsPage = () => {
  const { width } = useWindowDimensions();
  if (width >= 574) return <Navigate to="/transactions/expenses"/>
  
  return (
    <div>
      <div>
        <ReportsNav />
        <Balance />
      </div>
      <p>Wspólna tabela dla wydatków i przychodów:</p>
      <ExpensesIncomeTable />
      <ExpensesIncomeNav />
    </div>
  );
};

export default TransactionsPage;
