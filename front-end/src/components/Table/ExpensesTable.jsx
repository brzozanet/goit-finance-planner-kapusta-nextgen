import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

// HOOKS:
import useExpenses from "../../hooks/useExpenses";

const ExpensesTable = ({deleteExpense}) => {
  const { expenses } = useExpenses();

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
};

ExpensesTable.propTypes = {
  deleteExpense: PropTypes.func
};
 
export default ExpensesTable;