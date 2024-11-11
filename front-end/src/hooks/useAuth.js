import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData, selectLoading, selectLoadingRegister } from "../redux/user/selectors";

const useAuth = () => {
  const userData = useSelector(selectUserData); 
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loadingUser = useSelector(selectLoading);
  const loadingRegisterUser = useSelector(selectLoadingRegister);

  return {
    userData,
    isLoggedIn,
    loadingUser,
    loadingRegisterUser
  }
};

export default useAuth;