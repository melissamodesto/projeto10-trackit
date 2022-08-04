import React from "react";
import "./styleLoginScreen.css";

export default function LoginScreen() {
  return (
    <div className="login-screen">
      <img className="logo" src="./logo-trackit.png" alt="logo trackit" />
      <div className="input-login">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <div className="button-login">Entrar</div>

        <div className="signup">Não tem uma conta? Cadastre-se</div>
      </div>
    </div>
  );
}
