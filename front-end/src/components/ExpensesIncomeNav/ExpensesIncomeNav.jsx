import { NavLink } from "react-router-dom";

const ExpensesIncomeNav = () => {
  
  return ( 
    <div>
      <NavLink to="/transactions/expenses" >Expenses</NavLink>
      <NavLink to="/transactions/income" >Income</NavLink>
    </div>
   );
}
 
export default ExpensesIncomeNav;