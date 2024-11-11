import { useState } from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { updateBalance } from "../../redux/user/operations";

// HOOKS:
import useAuth from "../../hooks/useAuth";

const Balance = () => {
  const [newBalance, setNewBalance] = useState("");

  const { userData } = useAuth();
  // W userData mamy parametr firstLogin który domyślnie przy rejestracji użytkownika ustawiony jest na true 
  // a zmienia się na false przy aktualizacji bilansu. Można więc go wykożystać do wyświetlenia modala 
  // z informacją o konieczności wprowadzenia początkowego bilansu. To chyba będzie łatwiejsze w implementacji 
  // niż tak jak mięliśmy to ostatnio.

  const dispatch = useDispatch();

  const handlingSetNewBalance = () => dispatch(updateBalance(newBalance));

  return (
    <div>
      <span>Balance</span>
      <input
        type="number"
        onChange={(e) => setNewBalance(e.target.value)}
        value={newBalance}
      />
      <button type="button" onClick={handlingSetNewBalance}>
        Confirm
      </button>
    </div>
  );
};

export default Balance;
