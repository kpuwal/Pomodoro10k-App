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

interface CounterCycleProps {
  focus: number;
  relax: number;
  min: number;
  sec: number;
  cycle: boolean;
  pause: boolean;
  infoMessage: string;
}

export default function CounterCycle({ cycle, pause, min, sec, focus, relax, infoMessage }: CounterCycleProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMessage(0));
  }, [dispatch]);

  const completeFirstCycle = () => {
    dispatch(changeCycle(true));
    if (relax === 0) {
      completeSecondCycle();
    }
    dispatch(setMessage(1));
    // Vibration.vibrate();
    dispatch(setMin(relax));
    dispatch(setMode(1));
  };

  const completeSecondCycle = () => {
    // Vibration.vibrate();
    // Vibration.vibrate();
    dispatch(startStop());
    dispatch(pauseResume(false));
    dispatch(setMode(0));
    dispatch(setMin(focus));
    dispatch(saveSession());
  };

  const handleMessageOver = () => {
    completeFirstCycle();
    if (infoMessage === "End of Cycle") {
      completeSecondCycle();
    }
  };

  const handleCountOver = () => {
    dispatch(changeCycle(false));
    dispatch(setMode(2));
  };

  if (cycle) {
    return (
      <Counter
        countOver={() => handleCountOver()}
        {...{ min, sec, pause }}
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
