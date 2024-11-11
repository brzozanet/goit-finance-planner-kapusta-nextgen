import { useDispatch } from "react-redux";

// HOOKS:
import useAuth from "../../hooks/useAuth";
import useExpenses from "../../hooks/useExpenses";
import useIncomes from "../../hooks/useIncomes";

// REDUX ACTIONS:
import { deleteExpense } from "../../redux/expenses/operations";
import { deleteIncome } from "../../redux/incomes/operations";
// funkcja do usuwania transakcji przyjmuje jeden argument w postaci id transakcji

const ExpensesIncomeTable = () => {
  const {userData} = useAuth();
  // console.log({userData});
  const { expenses } = useExpenses();
  const { incomes } = useIncomes();
  // console.log({expenses, incomes});

  const dispatch = useDispatch();

  return ( 
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Example</td>
          <td>Example</td>
          <td>Example</td>
          <td>Example</td>
          <td><button onClick={()=>dispatch(deleteExpense("id transakcji"))}>Delete btn</button></td>
        </tr>
      </tbody>
    </table>
   );
}
 
export default ExpensesIncomeTable;