"use strict";
import React from "react";
import { useSelector } from "react-redux";

import CounterCycle from "./CounterCycle";
import DisplayIdle from "./display/Idle";
import DisplayMode from "./display/Mode";
import Controller from "./Controller";
import TimerSelect from "./TimerSelect";

function Timer() {
  const counter = useSelector((state) => state.counter);
  const session = useSelector((state) => state.session);
  const timers = useSelector((state) => state.timers);
  const card = useSelector((state) => state.stats);
  
  return (
    <>
      {counter.start 
        ? 
          <CounterCycle
            cycle={counter.cycle}
            message={session.message}
            timer={timers.selected}
          />
        : 
          <DisplayIdle 
          />}
      <DisplayMode
        start={counter.start}
        sessionType={session.mode}
      />
      <Controller
        start={counter.start}
        pause={counter.pause}
        timer={timers.selected}
        card={card.selected}
      />
      <TimerSelect {...{ timers }} />
    </>
  );
}

export default Timer;
