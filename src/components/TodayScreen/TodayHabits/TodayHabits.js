import React from "react";
import TopMessageToday from "./TopMessageToday";
import TodayHabit from "./TodayHabit";

export default function TodayHabits() {
  const [todayHabits, setTodayHabits] = useState([]);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    const getTodayHabits =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    console.log(token);

    const promise = axios.get(getTodayHabits, config);
    promise
      .then((response) => {
        const { data } = response;
        console.log(data);
        setTodayHabits(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function markAsDone(id) {
    const markCheked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const markUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    const newHabits = todayHabits.map((todayHabit) => {
      if (todayHabit.id === id) {
        if (todayHabit.done === false) {
          const promise = axios.post(markCheked, "", config);
          promise
            .then((response) => {})
            .catch((error) => {
              console.log(error);
            });
        } else if (todayHabit.done === true) {
          const promise = axios.post(markUncheck, "", config);
          promise
            .then((response) => {})
            .catch((error) => {
              console.log(error);
            });
        }
        return {
          ...todayHabit,
          done: !todayHabit.done,
        };
      } else {
        return todayHabit;
      }
    });
    setTodayHabits([...newHabits]);
  }

  function checkTodayHabitsList() {
    if (todayHabits.length > 0) {
      return todayHabits.map((todayHabit) => {
        return (
          <TodayHabit
            key={todayHabit.id}
            todayHabit={todayHabit}
            setHabitAsDone={(id) => markAsDone(id)}
          />
        );
      });
    } else {
      return <></>;
    }
  }

  const todayHabitsContent = checkTodayHabitsList();

  return (
    <div>
      <TopMessageToday todayHabits={todayHabits} />
      <div>
        <div>{todayHabitsContent}</div>
      </div>
    </div>
  );
}
