import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

// REDUX ACTIONS:
import { createChartData } from "../../redux/reports/reportsSlice";

const CategoryList = ({incomesCategories, expensesCategories}) => {

  const dispatch = useDispatch();


  return ( 
    <>
      <button onClick={() => dispatch(createChartData("Products"))}><div className="category"><p>200.00</p><img src="" alt="Products-img" /><p>Products</p></div></button>
      <button onClick={() => dispatch(createChartData("Health"))}><div className="category"><p>300.00</p><img src="" alt="Health-img" /><p>Health</p></div></button>
      <button onClick={() => dispatch(createChartData("Alcohol"))}><div className="category"><p>400.00</p><img src="" alt="Alcohol-img" /><p>Alcohol</p></div></button>
      <button onClick={() => dispatch(createChartData("Entertainment"))}><div className="category"><p>500.00</p><img src="" alt="Entertainment-img" /><p>Entertainment</p></div></button>
    </>
   );
}; 

CategoryList.propTypes = {
  incomesCategories: PropTypes.array,
  expensesCategories: PropTypes.array,
};
 
export default CategoryList;