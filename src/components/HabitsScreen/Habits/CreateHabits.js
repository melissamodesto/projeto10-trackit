import React from "react";
import Context from '../../Context/Context';

export default function CreateHabit({ saveHabit, toggleCreateHabit }) {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [habitName, setHabitName] = useContext(Context);
  const [habitDays, setHabitDays] = useContext(Context);

  const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
    if (!habitDays.includes(index)) {
      return (
        <div
          onClick={() => {
            if (!habitDays.includes(index)) {
              habitDays.push(index);
            } else {
              habitDays.sort();
              habitDays.splice(habitDays.indexOf(index), 1);
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
          if (!habitDays.includes(index)) {
            habitDays.push(index);
          } else {
            habitDays.sort();
            habitDays.splice(habitDays.indexOf(index), 1);
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
