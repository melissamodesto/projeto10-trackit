import React from "react";
import "./styleFooter.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
        <button>
          <p>Hoje</p>
        </button>
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </div>
  );
}
