import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return <button onClick={handleLogout}>Deslogar</button>;
}
