import PropTypes from "prop-types";

const ExpensesIncomeSummary = ({expensesMonthStats}) => {

  return ( 
    <div>
      <h4>Summary</h4>
      <p>January</p>
      <p>February</p>
      <p>March</p>
      <p>April</p>
      <p>...</p>
    </div>
   );
};

ExpensesIncomeSummary.propTypes = {
  expensesMonthStats: PropTypes.object,
};
 
export default ExpensesIncomeSummary;