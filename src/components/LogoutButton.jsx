import "../styles/LogoutButton.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { BiLogOut } from "react-icons/bi";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <div id="LogoutButton">
      <div className="userName">
        Logado como <span>{user.name}</span>
      </div>
      <div className="logout" onClick={handleLogout}>
        <BiLogOut />
      </div>
    </div>
  );
}
