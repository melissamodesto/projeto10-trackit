import React from "react";
import axios from "axios";

export default function Habit({ habit: { id, name, days }, removeHabit }) {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
    return days.includes(index) ? (
      <button key={index} className="day-button-selected">
        {day}
      </button>
    ) : (
      <button key={index} className="day-button">
        {day}
      </button>
    );
  });

  return (
    <>
      <p>{name}</p>
      <div>{buttonsDaysOfWeek}</div>
      <div onClick={() => removeHabit(id)}>
        <img src="../../assets/images/trash.png" alt="Remove Habit" />
      </div>
    </>
  );
}
