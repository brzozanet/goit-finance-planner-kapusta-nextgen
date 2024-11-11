import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

// HOOKS:
import useIncomes from "../../hooks/useIncomes";

const IncomeTable = ({deleteIncome}) => {
  const { incomes } = useIncomes();

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
          <td><button onClick={()=>dispatch(deleteIncome("id transakcji"))}>Delete btn</button></td>
        </tr>
      </tbody>
    </table>
   );
};

IncomeTable.propTypes = {
  deleteIncome: PropTypes.func
};

export default IncomeTable; 