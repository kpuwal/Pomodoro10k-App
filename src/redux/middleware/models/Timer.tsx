"use strict";

export class Timer {
  idx: number;
  data: object;

  constructor(value: object) {
    this.idx = Math.random();
    this.data = value;
  }
}
