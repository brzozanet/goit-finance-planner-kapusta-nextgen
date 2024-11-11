import { useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";

// REDUX ACTIONS:
import { login, register } from "../../redux/user/operations";

// HOOKS:
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userData, loadingRegisterUser, loadingUser} = useAuth();
  // console.log({userData});
  // Można zrobić coś na poprawną i niepoprawną rejestrację na zasadzie: if(userData.id){...}

  const data = { email, password };

  const dispatch = useDispatch();

  const loginUser = () => dispatch(login(data))
  const registerUser = () => dispatch(register(data))

  return (
    <>
      <div className="login-page-container">
        <div>
          <img src="" alt="kapusta-smart-finance-theme" />
        </div>
        <div>
          <p>mail7@mail.pl</p>
          <p>qwerty123</p>
          <form action="" className="login-form">
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="button" onClick={loginUser}>{loadingUser?<Loader width="20" height="20"/>:<>Login</>}</button>
            <button type="button" onClick={registerUser}>{loadingRegisterUser?<Loader width="20" height="20"/>:<>Register</>}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
