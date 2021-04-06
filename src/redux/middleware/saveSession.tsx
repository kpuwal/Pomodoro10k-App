"use strict";
import { SESSION_SAVE } from "../constants/actionTypes";
import { WEEKDAYS, MONTHS } from "../../config/constants";
import { updateDataStorage } from "../../storage/storage";

const CARDS_KEY = "@CARDS";

const updateTotal = (amount, item) => {
  return item.total + amount;
};

const updateWeekdaysTotal = (amount, item, day) => {
  const index = day.getDay();
  item[index] = item[index] + amount;
  return item;
};

const updateDates = (item, day) => {
  item.push(day.toLocaleDateString());
  return item;
};

const updateSpeed = (item, day) => {
  const diff = Math.abs(
    new Date(day.toLocaleDateString()) - new Date(item.dates[0])
  );
  // 1 DAY = 24 hrs X 60 mins X 60 secs X 1000 ms = 86400000 ms
  const diffdays = Math.floor(diff / 86400000) + 1;
  const speed = (item.total / diffdays / 60).toFixed(2);
  return speed;
};

const updateTimeLeft = (item) => {
  return 10000 - (item.total / 60).toFixed(2);
};

const convertWeekday = (value) => {
  const day = value.getDay();
  return WEEKDAYS[day];
};

const convertMonth = (value) => {
  const month = value.getMonth() + 1;
  return MONTHS[month - 1];
};

const updateDate = (item, day) => {
  day.setDate(day.getDate() + item.timeLeft);
  return {
    weekday: convertWeekday(day),
    day: day.getDate(),
    month: convertMonth(day),
    year: day.getFullYear(),
  };
};

const updateCard = (item, amount) => {
  const day = new Date();
  item.total = updateTotal(amount, item);
  item.weekdaysTotals = updateWeekdaysTotal(amount, item.weekdaysTotals, day);
  item.dates = updateDates(item.dates, day);
  item.speed = updateSpeed(item, day);
  item.timeLeft = updateTimeLeft(item);
  item.date = updateDate(item, day);
};

const saveSession = (store) => (next) => (action) => {
  const newAmount = store.getState().timers.selected.data.focus;
  const cardIdx = store.getState().stats.selected.idx;
  const cardsList = store.getState().stats.cards;
  const card = cardsList.find((el: any) => el.idx === cardIdx);

  if (action.type === SESSION_SAVE) {
    updateCard(card, newAmount);
    updateDataStorage(CARDS_KEY, { items: cardsList });
  }
  return next(action);
};

export default saveSession;