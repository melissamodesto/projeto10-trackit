import React from "react";

const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
const buttonsDaysOfWeek = daysOfWeek.map((day) => {
  return <div key={day}>{day}</div>;
});

export default function Habit(props) {
  const { id, name, days } = props;


  return (
    <>
      <p>{name}</p>
      <div>{buttonsDaysOfWeek}</div>
      <div>
        <img src="../../assets/images/trash.png" alt="Remove task Icon" />
      </div>
    </>
  );
}

