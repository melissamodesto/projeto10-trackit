import React from "react";

export default function TopMessageToday({ todayHabits }) {
    function getDayOfWeek() {
        const dayNumber = dayjs().day();
        switch (dayNumber) {
            case 0:
                return "Domingo";
            case 1:
                return "Segunda-Feira";
            case 2:
                return "Terça-Feira";
            case 3:
                return "Quarta-Feira";
            case 4:
                return "Quinta-Feira";
            case 5:
                return "Sexta-Feira";
            default:
                return "Sábado";
        }
    }

    function getMonthAndDay() {
        return (dayjs().format("DD/MM"));
    }

    function getPercentageDone() {
        const countHabitsDone = todayHabits.filter(
            (todayHabit) => todayHabit.done
        ).length;
        const countTotalHabits = todayHabits.length;

        return countHabitsDone > 0 ? (
            <div>
                {((countHabitsDone / countTotalHabits) * 100).toFixed(2)} %
                dos hábitos concluídos
            </div>
        ) : (
            <p>Nenhum hábito concluído ainda</p>
        );
    }

    return (
        <div>
            <h2>
                {getDayOfWeek()}, {getMonthAndDay()}
            </h2>
            {getPercentageDone()}
        </div>
    );
}