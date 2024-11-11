import PropTypes from "prop-types";

const BalanceLabel = ({incomeTotal, expenseTotal}) => {
  return ( 
    <div className="balance-label">
      <p>Expenses: <span>{expenseTotal}</span>USD</p>
      <p>Income: <span>{incomeTotal}</span>USD</p>
    </div>
   );
};

BalanceLabel.propTypes = {
  incomeTotal: PropTypes.number,
  expenseTotal: PropTypes.number
};
 
export default BalanceLabel;