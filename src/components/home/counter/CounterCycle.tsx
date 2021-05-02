"use strict";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../reduxToolkit/store";
import { Vibration } from "react-native";

import { message, mode } from "../../../reduxToolkit/slices/infoSlice";
import { updateCard } from "../../../reduxToolkit/slices/cardSlice";
import { cycleCounter, startCounter, pauseCounter } from "../../../reduxToolkit/slices/counterSlice";

import DisplayMessage from "../info/Message";
import Counter from "./Counter";

interface CounterCycleProps {
  relax: number;
  focus: number;
  cycle: boolean;
  pause: boolean;
  infoMessage: string;
}

const  CounterCycle = ({ cycle, pause, focus, relax, infoMessage }: CounterCycleProps) => {
  const [session, setSession] = useState({min: focus, sec: 0})
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSession({min: relax, sec: 0})
    dispatch(message(0));
    dispatch(mode(0));
  }, [dispatch]);

  const completeFirstCycle = () => {
    dispatch(cycleCounter(true));
    if (relax === 0) {
      completeSecondCycle();
    }
    dispatch(message(1));
    dispatch(mode(1));
    // Vibration.vibrate();
  };

  const completeSecondCycle = () => {
    dispatch(startCounter());
    dispatch(pauseCounter(false));
    dispatch(mode(0));
    dispatch(updateCard({min: focus, date: new Date()}));
    // Vibration.vibrate();
    // Vibration.vibrate();
  };

  const handleMessageOver = () => {
    completeFirstCycle();
    if (infoMessage === "End of Cycle") {
      completeSecondCycle();
    }
  };

  const handleCountOver = () => {
    dispatch(cycleCounter(false));
    dispatch(mode(2));
  };

  if (cycle) {
    return (
      <Counter
        countOver={() => handleCountOver()}
        min={session.min}
        sec={session.sec}
        {...{ pause }}
      />
    );
  } else {
    return (
      <DisplayMessage 
        messageOver={() => handleMessageOver()}
        message={infoMessage}
      />
    );
  }
}
export default CounterCycle;
