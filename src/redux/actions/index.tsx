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

export const selectSession = (min: number) => {
  return {
    type: actionType.SELECTED_SESSION,
    payload: {
      min: min,
      sec: 0,
    },
  };
};

export const setMin = (min: number) => {
  return {
    type: actionType.SESSION_MIN,
    payload: {
      min: min - 1,
      sec: 59,
    },
  };
};

export const setSec = (min: number, sec: number) => {
  return {
    type: actionType.SESSION_SEC,
    payload: {
      min: min,
      sec: sec - 1,
    },
  };
};

export const setMode = (index: number) => {
  return {
    type: actionType.SESSION_MODE,
    payload: index,
  };
};

export const setMessage = (index: number) => {
  return {
    type: actionType.SESSION_MESSAGE,
    payload: index,
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
