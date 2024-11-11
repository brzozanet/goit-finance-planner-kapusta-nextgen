// HOOKS:
import useAuth from "../../hooks/useAuth";

const UserData = () => {
  const {userData} = useAuth();

  return ( 
    <>
      <p>{userData.email}</p>
    </>
   );
}
 
export default UserData;