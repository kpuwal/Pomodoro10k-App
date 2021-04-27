"use strict";
// import { StyleGuide, ThemeProps } from "../config/StyleGuide";

export type DataProps = {
  focus: number,
  relax: number,
};

export interface TimerProps {
  idx: number,
  focus: { min: number, sec: number },
  relax: { min: number, sec: number },
};

export interface CardProps {
  idx: number;
  speed: number;
  total: number;
  timeLeft: number;
  date: {
    weekday: string,
    day: string,
    month: string,
    year: string,
  }
  weekdaysTotals: number[];
  goal: string;
  color: string;
  dates: number[];
  // theme: ThemeProps{},
};

export const Timer = (value: DataProps): TimerProps => {
  return {
    idx: Math.random(),
    focus: { min: value.focus, sec: 0 },
    relax: { min: value.relax, sec: 0 },
  };
};

export const Card = (color: string, title: string): CardProps => {
  return {
    idx: Math.random(),
    speed: 0,
    total: 0,
    timeLeft: 0,
    date: {
      weekday: "n/a",
      day: "n/a",
      month: "n/a",
      year: "n/a",
    },
    weekdaysTotals: [0, 0, 0, 0, 0, 0, 0],
    goal: title,
    color: color,
    dates: [],
    // theme: StyleGuide.color,
  }
};
