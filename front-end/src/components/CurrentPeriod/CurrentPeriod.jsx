import PropTypes from "prop-types";

const CurrentPeriod = ({currentPeriod, setCurrentPeriod}) => {
  return ( 
    <div>
      <span>Current Period</span>
      <p>{currentPeriod}</p>
    </div>
   );
};

CurrentPeriod.propTypes = {
  setCurrentPeriod: PropTypes.func,
  currentPeriod: PropTypes.string
};
 
export default CurrentPeriod;