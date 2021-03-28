"use strict";

import AsyncStorage from "@react-native-async-storage/async-storage";

const TIMERS_KEY: string = "@TIMERS";
const CARDS_KEY: string = "@CARDS";

// TO FIX wrong interface
interface Iitem {
  idx: number,
  data: {
    focus: number,
    relax: number,
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("error while clearStorage: ", error);
  }
};

export const saveItem = async (key: string, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("error while save timer: ", error);
  }
};

export const getItemFromStorage = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item !== null ? JSON.parse(item) : [];
  } catch (error) {
    console.log("error while getTimers ", error);
  }
};

export const updateDataStorage = async (key: string, value) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("error while updateDataStorage ", error);
  }
};

export const removeItemFromStorage = async (key: string, idx: number) => {
  try {
    const previousItem = await getItemFromStorage(key);
    if (previousItem !== null) {
      const newItem = previousItem.items.filter((item: Iitem) => item.idx !== idx);
      saveItem(key, { items: newItem });
    }
  } catch (error) {
    console.log("error while removeItemFromStorage ", error);
  }
};

export const getDataFromStorage = async () => {
  // clearStorage()
  try {
    await AsyncStorage.multiGet([TIMERS_KEY, CARDS_KEY]).then((items) => {
      return {
        timers: items[0][1] !== null ? JSON.parse(items[0][1]) : [],
        cards: items[1][1] !== null ? JSON.parse(items[1][1]) : [],
      }
    });
  } catch (error) {
    console.log("error while getDataFromStorage ", error);
  }
};
