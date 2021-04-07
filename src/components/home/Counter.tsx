"use strict";
import React from "react";
import { useDispatch } from "react-redux";

import { setMin, setSec } from "../../redux/actions";
import useInterval from "../modules/home/useInterval";

import DisplayCounter from "./display/Counter";

interface CounterProps {
  countOver: () => void;
  pause: boolean;
  min: number;
  sec: number;
};

const Counter = ({ countOver, pause, min, sec }: CounterProps) => {
  const dispatch = useDispatch();

  useInterval(() => tick(), 1000);

  const tick = () => {
    if (pause) {
      return;
    }
    if (min === 0 && sec === 0) {
      return countOver();
    }

    if (sec === 0) {
      dispatch(setMin(min));
    } else {
      dispatch(setSec(min, sec));
    }
  };

  return <DisplayCounter {...{ sec, min }} />;
};

export default Counter;
