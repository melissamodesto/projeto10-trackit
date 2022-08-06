import React from "react";

export default function CreateHabit({ saveHabit, toggleCreateHabit }) {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [habitName, setHabitName] = React.useState("");
  const [habitDays, setHabitDays] = React.useState([]);

  const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
    if (!habitDays.includes(index + 1)) {
      return (
        <div
          onClick={() => {
            if (!habitDays.includes(index + 1)) {
              habitDays.push(index + 1);
            } else {
              habitDays.sort();
              habitDays.splice(habitDays.indexOf(index + 1), 1);
            }
            habitDays.sort();
            setHabitDays([...habitDays]);
          }}
        >
          {day}
        </div>
      );
    }
    return (
      <div
        onClick={() => {
          if (!habitDays.includes(index + 1)) {
            habitDays.push(index + 1);
          } else {
            habitDays.sort();
            habitDays.splice(habitDays.indexOf(index + 1), 1);
          }
          habitDays.sort();
          setHabitDays([...habitDays]);
        }}
      >
        {day}
      </div>
    );
  });

  function handleSaveHabit() {
    saveHabit({ name: habitName, days: habitDays });
    setHabitName("");
    setHabitDays([]);
  }

  return (
    <div>
      <div
        value={habitName}
        onChange={(event) => setHabitName(event.target.value)}
        type="text"
        placeholder="nome do hábito"
      />
      <div>{buttonsDaysOfWeek}</div>
      <div>
        <div onClick={() => toggleCreateHabit(false)}>
          Cancelar
        </div>
        <div onClick={handleSaveHabit}>Salvar</div>
      </div>
    </div>
  );
}
