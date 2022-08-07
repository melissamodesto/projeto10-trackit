import React from "react";
import './styleHeader.css';

export default function Header() {

  const userData = JSON.parse(localStorage.getItem("userData"));
  const  image = userData;

  return (
    <div className="header">
      <h1 className="title">TrackIt</h1>
      <img className="header-profile" src={image} />
    </div>
  );
}
