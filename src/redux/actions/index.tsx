"use strict";
import * as actionType from "../constants/actionTypes";
import { getDataFromStorage } from "../../storage/storage";
import { IStats } from "../../redux/reducers/stats";
import { ITimer } from "../../redux/reducers/timers";

export const startStop = () => {
  return {
    type: actionType.START_COUNTER,
  };
};

export const pauseResume = (value: boolean) => {
  return {
    type: actionType.PAUSE_COUNTER,
    payload: value,
  };
};

export const changeCycle = (value: boolean) => {
  return {
    type: actionType.CYCLE_COUNTER,
    payload: value,
  };
};

export const selectSession = (min) => {
  return {
    type: actionType.SELECTED_SESSION,
    select: {
      min: min,
      sec: 0,
    },
  };
};

export const setMin = (min) => {
  return {
    type: actionType.SESSION_MIN,
    countMin: {
      min: min - 1,
      sec: 59,
    },
  };
};

export const setSec = (min, sec) => {
  return {
    type: actionType.SESSION_SEC,
    countSec: {
      min: min,
      sec: sec - 1,
    },
  };
};

export const setMode = (index) => {
  return {
    type: actionType.SESSION_MODE,
    idx: index,
  };
};

export const setMessage = (index) => {
  return {
    type: actionType.SESSION_MESSAGE,
    idx: index,
  };
};

export const selectTimer = (item: object) => {
  return {
    type: actionType.SELECTED_TIMER,
    payload: item,
  };
};

export const createTimer = (focus: number, relax: number) => {
  return {
    type: actionType.CREATE_TIMER,
    payload: {
      focus,
      relax,
    },
  };
};

export const deleteTimer = (item: object) => {
  return {
    type: actionType.DELETE_TIMER,
    payload: item,
  };
};

export const clearTimers = () => {
  return {
    type: actionType.CLEAR_TIMERS,
  };
};

export const selectCard = (item: object) => {
  return {
    type: actionType.SELECTED_CARD,
    payload: item,
  };
};

export const createCard = (color: string, title: string) => {
  return {
    type: actionType.CREATE_CARD,
    payload: {
      color,
      title,
    },
  };
};

export const deleteCard = (item: object) => {
  return {
    type: actionType.DELETE_CARD,
    payload: item,
  };
};

export const clearCards = () => {
  return {
    type: actionType.CLEAR_CARDS,
  };
};

export const fetchData = () => {
  console.log("fetchin Data From Storage")
  return async (dispatch) => {
    try {
      const values = await getDataFromStorage();
      return dispatch([
        {
          type: actionType.FETCH_TIMERS,
          payload: values[0].items,
        },
        {
          type: actionType.FETCH_CARDS,
          payload: values[1].items,
        },
      ]);
    } catch (error) {
      console.error("error while fetchData ", error);
    }
  };
};

export const saveSession = () => {
  return {
    type: actionType.SESSION_SAVE,
  };
};
