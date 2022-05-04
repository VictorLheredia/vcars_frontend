import "../styles/LoginPage.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { Container } from "react-bootstrap";
import loginImg from "../img/authentication.svg";

export default function LoginPage() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassaword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container>
      <div id="login">
        <div className="login-img">
          <img src={loginImg} alt="login" />
        </div>
        <div className="login-container">
          <div className="login-box">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
               
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  id="password"
                  value={password}
                  onChange={(e) => setPassaword(e.target.value)}
                />
              </div>
              <div className="actions">
                <button type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
