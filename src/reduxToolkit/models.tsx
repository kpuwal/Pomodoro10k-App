"use strict";

export type DataProps = {
  focus: number,
  relax: number,
};

export interface TimerProps {
  idx: number,
  data: DataProps,
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
  dates: string[];
};

export const Timer = (value: DataProps): TimerProps => {
  return {
    idx: Math.random(),
    data: {
      focus: value.focus,
      relax: value.relax,
    },
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
  }
};
