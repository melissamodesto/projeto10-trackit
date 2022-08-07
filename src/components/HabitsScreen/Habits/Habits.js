import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Habit from "./Habit.js";
import axios from "axios";
import CreateHabits from "./CreateHabits";
import SecondHeader from "../../Header/SecondHeader.js";
import Context from "../../Context/Context";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [toggleCreateHabit, setToggleCreateHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  console.log(token);

  function toggleCreateHabitContainer(value) {
    setToggleCreateHabit(value);
  }

  useEffect(() => {
    const habitsGet =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.get(habitsGet, config);
    promise
      .then((response) => {
        const { data } = response;
        console.log(data);
        setHabits(data);
      })
      .catch((error) => {
        alert(error);
        navigate("../");
      });
  }, []);

  function checkHabitsList() {
    if (habits.length > 0) {
      return habits.map((habit) => {
        return (
          <Habit
            habit={habit}
            removeHabit={(habitId) => {
              removeHabit(habitId);
            }}
          />
        );
      });
    } else {
      return <SecondHeader />;
    }
  }

  function checkCreateHabitContainer() {
    return toggleCreateHabit ? (
      <div value={{ habitName, habitDays, setHabitName, setHabitDays }}>
        <div
          toggleCreateHabit={(value) => {
            toggleCreateHabit(value);
          }}
          saveHabit={(habitData) => {
            saveHabit(habitData);
          }}
          componentLoaded={componentLoaded}
          setComponentLoaded={setComponentLoaded}
        />
      </div>
    ) : (
      <></>
    );
  }

  function saveHabit(habitData) {
    setComponentLoaded(false);
    const createHabitContent =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.post(createHabitContent, habitData, config);
    promise
      .then((response) => {
        const { data } = response;
        console.log(data);
        habitData.id = data.id;
        toggleCreateHabit(false);
      })
      .catch((error) => {
        console.log(error);
        setComponentLoaded(false);
      });
    setHabits([...habits, habitData]);
  }

  function removeHabit(habitId) {
    const deleteHabit = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
    axios.delete(deleteHabit, config);
    console.log("Oiiiiiii");
    const newHabits = habits.filter((habit, index) => {
      if (habit.id === habitId) {
        return false;
      } else {
        return true;
      }
    });
    setHabits(newHabits);
  }

  const createHabitContent = checkCreateHabitContainer();
  const habitsContent = checkHabitsList();

  return (
    <>
      <div>
        <SecondHeader
          toggleCreateHabitContainer={(value) => {
            toggleCreateHabitContainer(value);
          }}
        />
        <div>
          {createHabitContent}
          {habitsContent}
        </div>
      </div>
    </>
  );
}
