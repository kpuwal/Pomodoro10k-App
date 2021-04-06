"use strict";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setMin, setSec } from "../../redux/actions";
import useInterval from "../modules/home/useInterval";

import DisplayCounter from "./display/Counter";

interface CounterProps {
  countOver: () => void;
};

const Counter = ({ countOver }: CounterProps) => {
  const dispatch = useDispatch();
  const pause = useSelector((state) => state.counter.pause);
  const count = useSelector((state) => state.session.session);

  useInterval(() => tick(), 1000);

  const tick = () => {
    if (pause) {
      return;
    }
    if (count.min === 0 && count.sec === 0) {
      return countOver();
    }

    if (count.sec === 0) {
      dispatch(setMin(count.min));
    } else {
      dispatch(setSec(count.min, count.sec));
    }
  };

  return <DisplayCounter />;
};

export default Counter;
