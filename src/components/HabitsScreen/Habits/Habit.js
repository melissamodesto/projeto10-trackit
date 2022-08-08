import React from "react";
import * as style from "../../../style/styles";

export default function Habit({ habit: { id, name, days }, removeHabit }) {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
    return days.includes(index) ? (
      <style.DayButtonOn key={index}>{day}</style.DayButtonOn>
    ) : (
      <style.DayButtonOn key={index}>{day}</style.DayButtonOn>
    );
  });

  return (
    <style.Habit>
      <p>{name}</p>
      <div>{buttonsDaysOfWeek}</div>
      <style.RemoveHabit
        onClick={() => {
          if (window.confirm("Realmente deseja apagar o hábito?")) {
            removeHabit(id);
          }
        }}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </style.RemoveHabit>
    </style.Habit>
  );
}
