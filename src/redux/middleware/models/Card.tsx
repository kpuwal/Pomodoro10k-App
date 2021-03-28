"use strict";

export class Card {
  idx: number;
  speed: number;
  total: number;
  timeLeft: number;
  date: {
    weekday: string,
    day: string,
    month: string,
    year: string,
  };
  weekdaysTotals: number[];
  goal: string;
  color: string;
  dates: string[];

  constructor (value: {title: string, color: string}) {
    this.idx = Math.random();
    this.speed = 0;
    this.total = 0;
    this.timeLeft = 0;
    this.date = {
      weekday: "n/a",
      day: "n/a",
      month: "n/a",
      year: "n/a",
    };
    this.weekdaysTotals = [0, 0, 0, 0, 0, 0, 0];
    this.goal = value.title;
    this.color = value.color;
    this.dates = new Array(0);
  }
}
