"use strict";
import React from "react";
import { useSelector } from "react-redux";

import CounterCycle from "./counter/CounterCycle";
import DisplayIdle from "./counter/DisplayIdle";
import DisplayMode from "./info/Mode";
import Controller from "./controller/Controller";
import TimerSelect from "./timerselect/TimerSelect";

function Timer() {
  const counter = useSelector((state) => state.counter);
  const session = useSelector((state) => state.session);
  const timers = useSelector((state) => state.timers);
  const card = useSelector((state) => state.stats);
  const info = useSelector((state) => state.info);
  
  return (
    <>
      {counter.start 
        ? 
          <CounterCycle
            focus={timers.selected.data.focus}
            relax={timers.selected.data.relax}
            infoMessage={info.message}
            min={session.session.min}
            sec={session.session.sec}
            cycle={counter.cycle}
            pause={counter.pause}
          />
        : 
          <DisplayIdle
            min={session.selected.min}
            sec={session.selected.sec}  
          />
      }
      <DisplayMode
        start={counter.start}
        infoMode={info.mode}
      />
      <Controller
        start={counter.start}
        pause={counter.pause}
        focus={timers.selected.data.focus}
        card={card.selected}
      />
      <TimerSelect {...{ timers }} />
    </>
  );
}

export default Timer;
