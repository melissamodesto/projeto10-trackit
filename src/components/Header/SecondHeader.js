import React from "react";
import * as style from "../../style/styles";

export default function SecondHeader({ toggleCreateHabitContainer }) {
  return (
    <>
      <style.SecondHeader>
        <h2>Meus Hábitos</h2>
        <button onClick={() => toggleCreateHabitContainer(true)}>+</button>
      </style.SecondHeader>
    </>
  );
}
