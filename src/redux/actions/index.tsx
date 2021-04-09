"use strict";
import * as actionType from "../constants/actionTypes";
import { getDataFromStorage } from "../../storage/storage";

export const startStop = () => {
  return {
    type: actionType.START_COUNTER,
  } as const;
};

export const pauseResume = (value: boolean) => {
  return {
    type: actionType.PAUSE_COUNTER,
    payload: value,
  } as const;
};

export const changeCycle = (value: boolean) => {
  return {
    type: actionType.CYCLE_COUNTER,
    payload: value,
  } as const;
};

export const selectSession = (min: number) => {
  return {
    type: actionType.SELECTED_SESSION,
    payload: {
      min: min,
      sec: 0,
    },
  } as const;
};

export const setMin = (min: number) => {
  return {
    type: actionType.SESSION_MIN,
    payload: {
      min: min - 1,
      sec: 59,
    },
  } as const;
};

export const setSec = (min: number, sec: number) => {
  return {
    type: actionType.SESSION_SEC,
    payload: {
      min: min,
      sec: sec - 1,
    },
  } as const;
};

export const setMode = (index: number) => {
  return {
    type: actionType.SESSION_MODE,
    payload: index,
  } as const;
};

export const setMessage = (index: number) => {
  return {
    type: actionType.SESSION_MESSAGE,
    payload: index,
  } as const;
};

export const selectTimer = (item: object) => {
  return {
    type: actionType.SELECTED_TIMER,
    payload: item,
  } as const;
};

export const createTimer = (focus: number, relax: number) => {
  return {
    type: actionType.CREATE_TIMER,
    payload: {
      focus,
      relax,
    },
  } as const;
};

export const deleteTimer = (item: object) => {
  return {
    type: actionType.DELETE_TIMER,
    payload: item,
  } as const;
};

export const clearTimers = () => {
  return {
    type: actionType.CLEAR_TIMERS,
  } as const;
};

export const selectCard = (item: object) => {
  return {
    type: actionType.SELECTED_CARD,
    payload: item,
  } as const;
};

export const createCard = (color: string, title: string) => {
  return {
    type: actionType.CREATE_CARD,
    payload: {
      color,
      title,
    },
  } as const;
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
  } as const;
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
