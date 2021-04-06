"use strict";
import React from "react";
import { useDispatch } from "react-redux";

import { setMin, setSec } from "../../redux/actions";
import useInterval from "../modules/home/useInterval";

import DisplayCounter from "./display/Counter";
import { SessionProps } from "../../redux/reducers/session";

interface CounterProps {
  countOver: () => void;
  pause: boolean;
  session: SessionProps;
};

const Counter = ({ countOver, pause, session }: CounterProps) => {
  const dispatch = useDispatch();

  useInterval(() => tick(), 1000);

  const tick = () => {
    if (pause) {
      return;
    }
    if (session.min === 0 && session.sec === 0) {
      return countOver();
    }

    if (session.sec === 0) {
      dispatch(setMin(session.min));
    } else {
      dispatch(setSec(session.min, session.sec));
    }
  };

  return <DisplayCounter {...{ session }} />;
};

export default Counter;
