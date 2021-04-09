"use strict";
import { AnyAction } from "redux";
import { AppDispatch } from "../../Root";
import { SESSION_SAVE } from "../constants/actionTypes";
import { WEEKDAYS, MONTHS } from "../../config/constants";
import { updateDataStorage } from "../../storage/storage";

import { Card } from "../models/Card";

const CARDS_KEY = "@CARDS";

type DateType = {
  weekday: string, day: string, month: string, year: string
};

const updateTotal = (amount: number, item: Card): number => {
  return item.total + amount;
};

const updateWeekdaysTotal = (amount: number, item: number[], day: Date): number[] => {
  const index: number = day.getDay().valueOf();
  item[index] = item[index]! + amount;
  return item;
};

const updateDates = (item: string[], day: Date): string[] => {
  item.push(day.toLocaleDateString());
  return item;
};

const updateSpeed = (item: Card, day: Date): number => {
  const date1: number = new Date(day.toLocaleDateString()).valueOf();
  const date2: number = new Date(item.dates[0]!).valueOf()
  const diff = Math.abs(date1 - date2);
  // 1 DAY = 24 hrs X 60 mins X 60 secs X 1000 ms = 86400000 ms
  const diffdays = Math.floor(diff / 86400000) + 1;
  return (item.total / diffdays / 60);
};

const updateTimeLeft = (item: Card): number => {
  return 10000 - (item.total / 60);
};

const convertWeekday = (value: Date): string => {
  const day = value.getDay().valueOf();
  return WEEKDAYS[day]!;
};

const convertMonth = (value: Date): string => {
  const month = value.getMonth() + 1;
  return MONTHS[month - 1]!;
};

const updateDate = (item: Card, day: Date): DateType => {
  day.setDate(day.getDate() + item.timeLeft);
  return {
    weekday: convertWeekday(day),
    day: day.getDate().toString(),
    month: convertMonth(day),
    year: day.getFullYear().toString(),
  };
};

const updateCard = (item: Card, amount: number) => {
  const day: Date = new Date();
  item.total = updateTotal(amount, item);
  item.weekdaysTotals = updateWeekdaysTotal(amount, item.weekdaysTotals, day);
  item.dates = updateDates(item.dates, day);
  item.speed = updateSpeed(item, day);
  item.timeLeft = updateTimeLeft(item);
  item.date = updateDate(item, day);
};

const saveSession = (store) => (next: AppDispatch) => (action: AnyAction) => {
  const newAmount = store.getState().timers.selected.data.focus;
  const cardIdx = store.getState().stats.selected.idx;
  const cardsList = store.getState().stats.cards;
  const card = cardsList.find((el: Card) => el.idx === cardIdx);

  if (action.type === SESSION_SAVE) {
    updateCard(card, newAmount);
    updateDataStorage(CARDS_KEY, { items: cardsList });
  }
  return next(action);
};

export default saveSession;