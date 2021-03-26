"use strict";
import React from "react";
import { useSelector } from "react-redux";

import CounterCycle from "./CounterCycle";
import DisplayIdle from "./display/Idle";
import DisplayMode from "./display/Mode";
import Controller from "./Controller";
import TimerSelect from "./TimerSelect";

function Timer() {
  const start = useSelector((state) => state.counter.start);

  return (
    <>
      {start ? <CounterCycle /> : <DisplayIdle />}
      <DisplayMode />
      <Controller />
      <TimerSelect />
    </>
  );
}

export default Timer;
