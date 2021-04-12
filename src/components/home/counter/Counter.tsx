"use strict";
import React from "react";
import { useAppDispatch } from "../../../reduxToolkit/store";

import { minutes, seconds } from "../../../reduxToolkit/sessionSlice";
import useInterval from "../../../hooks/useInterval";

import DisplayCounter from "./DisplayCounter";

interface CounterProps {
  countOver: () => void;
  pause: boolean;
  min: number;
  sec: number;
};

const Counter = ({ countOver, pause, min, sec }: CounterProps) => {
  const dispatch = useAppDispatch();

  useInterval(() => tick(), 1000);

  const tick = () => {
    if (pause) {
      return;
    }
    if (min === 0 && sec === 0) {
      return countOver();
    }

    if (sec === 0) {
      dispatch(minutes(min));
    } else {
      dispatch(seconds({min, sec}));
    }
  };

  return <DisplayCounter {...{ sec, min }} />;
};

export default Counter;
