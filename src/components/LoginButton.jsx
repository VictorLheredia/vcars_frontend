import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  function navForLogin() {
      navigate("/login")
  }

  return <button onClick={navForLogin}>Logar</button>;
}
