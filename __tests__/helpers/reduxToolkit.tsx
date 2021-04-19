const initTestCard = {
  idx: 0.1234,
  speed: 0.00022768670309653916,
  total: 5,
  timeLeft: 9999.916666666666,
  date: {
    weekday: "Sunday",
    day: "2",
    month: "July",
    year: "2017",
  },
  weekdaysTotals: [5, 0, 0, 0, 0, 0, 0],
  goal: "Goal",
  color: "#000",
  dates: ["02/07/2017"]
};

const updatedTestCard = {
  idx: 0.1234,
  speed: 0.0006830601092896175,
  total: 15,
  timeLeft: 9999.75,
  date: {
    weekday: "Thursday",
    day: "16",
    month: "November",
    year: "2045",
  },
  weekdaysTotals: [5, 10, 0, 0, 0, 0, 0],
  goal: "Goal",
  color: "#000",
  dates: ["02/07/2017", "02/07/2018"]
};

const testCardDummy = {
  idx: 0.5678,
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
  goal: "Another Goal",
  color: "#fff",
  dates: ["19/04/2021"]
};

export const initList = [ initTestCard, testCardDummy ];
export const updatedList = [ updatedTestCard, testCardDummy ];
