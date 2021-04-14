"use strict";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";

import CounterCycle from "./counter/CounterCycle";
import DisplayCounter from "./counter/DisplayCounter";
import DisplayMode from "./info/Mode";
import Controller from "./controller/Controller";
import TimerSelect from "./timer/TimerSelect";

const Timer: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const timers = useSelector((state: RootState) => state.timer);
  const card = useSelector((state: RootState) => state.card);
  const info = useSelector((state: RootState) => state.info);
  
  return (
    <>
      {counter.start 
        ? 
          <CounterCycle
            focus={timers.selected.data.focus}
            relax={timers.selected.data.relax}
            infoMessage={info.message}
            min={timers.runningTimer.min}
            sec={timers.runningTimer.sec}
            cycle={counter.cycle}
            pause={counter.pause}
          />
        : 
          <DisplayCounter
            min={timers.runningTimer.min}
            sec={timers.runningTimer.sec}  
          />
      }
      <DisplayMode
        start={counter.start}
        infoMode={info.mode}
      />
      <Controller
        start={counter.start}
        pause={counter.pause}
        card={card.selected}
      />
      <TimerSelect {...{ timers }} />
    </>
  );
}

export default Timer;
