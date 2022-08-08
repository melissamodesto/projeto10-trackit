import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Habit from "./Habit.js";
import axios from "axios";
import SecondHeader from "../../Header/SecondHeader.js";
import CreateHabit from "./CreateHabits";
import NoHabitMessage from "../../Messages/NoHabitMessage.js";
import UserContext from "../../Context/UserContext";
import CreateHabitContext from "../../Context/CreateHabitContext";
import * as style from "../../../style/styles";

export default function Habits() {
  const { setUserLoggedIn } = useContext(UserContext);
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

  function toggleCreateHabitContainer(value) {
    setToggleCreateHabit(value);
  }

  useEffect(() => {
    const habitsGet =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.get(habitsGet, config);
    promise
      .then((response) => {
        setUserLoggedIn(true); // user is logged in
        const { data } = response;
        setHabits(data);
      })
      .catch((error) => {
        setUserLoggedIn(false); // if user is not logged in, set userLoggedIn to false
        navigate("../");
      });
  }, []);

  function checkHabitsList() {
    if (habits.length > 0) {
      return habits.map((habit, index) => {
        return (
          <Habit
            key={index}
            habit={habit}
            removeHabit={(habitId) => {
              removeHabit(habitId);
            }}
          />
        );
      });
    } else {
      return <NoHabitMessage />;
    }
  }

  function checkCreateHabitContainer() {
    return toggleCreateHabit ? (
      <CreateHabitContext.Provider
        value={{ habitName, habitDays, setHabitName, setHabitDays }}
      >
        <CreateHabit
          toggleCreateHabitContainer={(value) => {
            toggleCreateHabitContainer(value);
          }}
          saveHabit={(habitData) => {
            saveHabit(habitData);
          }}
          componentLoaded={componentLoaded}
          setComponentLoaded={setComponentLoaded}
        />
      </CreateHabitContext.Provider>
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
        habitData.id = data.id;
        toggleCreateHabitContainer(false);
        setHabits([...habits, habitData]);
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente");
        setComponentLoaded(true);
      });
  }

  function removeHabit(habitId) {
    const deleteHabit = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
    axios.delete(deleteHabit, config);

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
      <style.Container>
        <SecondHeader
          toggleCreateHabitContainer={(value) => {
            toggleCreateHabitContainer(value);
          }}
        />
        <style.Habits>
          {createHabitContent}
          {habitsContent}
        </style.Habits>
      </style.Container>
    </>
  );
}
