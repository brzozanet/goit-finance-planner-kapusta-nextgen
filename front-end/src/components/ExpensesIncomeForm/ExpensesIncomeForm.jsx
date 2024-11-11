import { useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

const ExpensesIncomeForm = ({categories, callback, actionType}) => {
  // Wydaje mi się że to actionType jest nie potrzebne ale na razie zostawiam.
  // Categories jest do selecta (z góry narzucone kategorie w formie tablicy) 
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const sendNewExpenseIncome = () => {
    const data = { date, description, category, amount };
    dispatch(callback(data))
  };

  return (
    <form action="">
      <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
      <input type="text" placeholder="Product description" onChange={(e) => setDescription(e.target.value)} value={description}/>
      <input type="text" placeholder="Product category" onChange={(e) => setCategory(e.target.value)} value={category}/>
      <input type="number" placeholder="0,00" onChange={(e) => setAmount(e.target.value)} value={amount}/>
      <button type="button" onClick={sendNewExpenseIncome}>Input</button>
      <button>Clear</button>
    </form>
  );
};

ExpensesIncomeForm.propTypes = {
  categories: PropTypes.array,
  callback: PropTypes.func,
  actionType: PropTypes.string
};

export default ExpensesIncomeForm;
