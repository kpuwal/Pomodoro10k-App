"use strict";

import AsyncStorage from "@react-native-async-storage/async-storage";

const TIMERS_KEY: string = "@TIMERS";
const CARDS_KEY: string = "@CARDS";

export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("error while clearStorage: ", error);
  }
};

export const saveItem = async (key: string, value: object): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("error while save timer: ", error);
  }
};

export const getItemFromStorage = async (key: string): Promise<void> => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item !== null ? JSON.parse(item) : [];
  } catch (error) {
    console.log("error while getTimers ", error);
  }
};

export const updateDataStorage = async (key: string, value: object): Promise<void> => {
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
      const newItem = previousItem.items.filter((item) => item.idx !== idx);
      saveItem(key, { items: newItem });
    }
  } catch (error) {
    console.log("error while removeItemFromStorage ", error);
  }
};

export const getDataFromStorage = async () => {
  // clearStorage()
  let items;
  try {
    await AsyncStorage.multiGet([TIMERS_KEY, CARDS_KEY], (err, stores)=> {
      items = stores.map((result, i, store) => {
       return store[i][1] !== null ?  JSON.parse(store[i][1]) : {items: []}
      });
    });
  } catch (error) {
    console.log("error while getDataFromStorage ", error);
  }
  return items;
};
