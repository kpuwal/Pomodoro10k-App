"use strict";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Vibration } from "react-native";

import {
  setMessage,
  setMin,
  changeCycle,
  setMode,
  startStop,
  pauseResume,
  saveSession,
  // fetchStats,
} from "../../redux/actions";

import DisplayMessage from "./display/Message";
import Counter from "./Counter";

export default function CounterCycle() {
  const dispatch = useDispatch();
  const cycle = useSelector((state) => state.counter.cycle);
  const message = useSelector((state) => state.session.message);
  const timer = useSelector((state) => state.timers.selected.data);

  useEffect(() => {
    dispatch(setMessage(0));
  }, [dispatch]);

  const completeFirstCycle = () => {
    dispatch(changeCycle(true));
    if (timer.relax === 0) {
      completeSecondCycle();
    }
    dispatch(setMessage(1));
    // Vibration.vibrate();
    dispatch(setMin(timer.relax));
    dispatch(setMode(1));
  };

  const completeSecondCycle = () => {
    // Vibration.vibrate();
    // Vibration.vibrate();
    dispatch(startStop());
    dispatch(pauseResume(false));
    dispatch(setMode(0));
    dispatch(setMin(timer.focus));
    dispatch(saveSession());
    // setTimeout(() => {
    //   dispatch(fetchStats());
    // }, 2000);
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
