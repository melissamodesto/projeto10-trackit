import React from "react";
import TopMessageToday from "./TopMessageToday";
import TodayHabit from "./TodayHabit";

export default function TodayHabits() {
    return (
        <S.Container>
            <TopMessageToday />
            <S.TodayHabits>
                <TodayHabit />
                <TodayHabit />
                <TodayHabit />
                <TodayHabit />
            </S.TodayHabits>
        </S.Container>
    );
}