"use strict";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Vibration } from "react-native";

import {
  setMessage,
  setMin,
  changeCycle,
  setMode,
  startStop,
  pauseResume,
  saveSession,
} from "../../redux/actions";

import DisplayMessage from "./display/Message";
import Counter from "./Counter";
import { TimerProps } from "../../redux/reducers/timers";

interface CounterCycleProps {
  cycle: boolean;
  message: string;
  timer: TimerProps;
}

export default function CounterCycle({ cycle, message, timer }: CounterCycleProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMessage(0));
  }, [dispatch]);

  const completeFirstCycle = () => {
    dispatch(changeCycle(true));
    if (timer.data.relax === 0) {
      completeSecondCycle();
    }
    dispatch(setMessage(1));
    // Vibration.vibrate();
    dispatch(setMin(timer.data.relax));
    dispatch(setMode(1));
  };

  const completeSecondCycle = () => {
    // Vibration.vibrate();
    // Vibration.vibrate();
    dispatch(startStop());
    dispatch(pauseResume(false));
    dispatch(setMode(0));
    dispatch(setMin(timer.data.focus));
    dispatch(saveSession());
  };

  const handleMessageOver = () => {
    completeFirstCycle();
    if (message === "End of Cycle") {
      completeSecondCycle();
    }
  };

  const handleCountOver = () => {
    dispatch(changeCycle(false));
    dispatch(setMode(2));
  };

  if (cycle) {
    return <Counter countOver={() => handleCountOver()} />;
  } else {
    return <DisplayMessage messageOver={() => handleMessageOver()} />;
  }
}
