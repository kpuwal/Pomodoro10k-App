import {
  updateTotal,
  updateWeekdaysTotal,
  updateDates,
  updateSpeed,
  updateTimeLeft,
  updateDate,
} from "./helper";

const testCard = {
  idx: 0.123456789,
  speed: 0,
  total: 10,
  timeLeft: 10,
  date: {
    weekday: "n/a",
    day: "n/a",
    month: "n/a",
    year: "n/a",
  },
  weekdaysTotals: [0, 0, 0, 0, 0, 0, 0],
  goal: "Goal",
  color: "#000000",
  dates: ["12/05/2019"]
};

const getDay = () => new Date(Date.now());

beforeEach(() => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() =>
      new Date("2019-05-14T11:01:58.135Z").valueOf()
    );
});

describe("Update Card", () => {
  test("it should return correct value of total", () => {
    const input = testCard.total;
    expect(updateTotal(10, input)).toEqual(20);
  });

  test("it should return correct total value for array of weekdays", () => {
    const day = getDay();
    const input = testCard.weekdaysTotals;
    expect(updateWeekdaysTotal(10, input, day)).toEqual([0, 0, 10, 0, 0, 0, 0])
  });

  test("it should return correct value of dates", () => {
    const day = getDay();
    const input = testCard.dates;
    expect(updateDates(input, day)).toEqual(["12/05/2019", "14/05/2019"])
  });

  test("it should calculate speed of progress", () => {
  });

  test("it should calculate how much time left to reach the goal", () => {
    expect(updateTimeLeft(testCard)).toEqual(9999.833333333334);
  });

  test("it should return an object of correctly predicted date", () => {
    const day = getDay();
    const prediction = {weekday: "Friday", day: "24", month: "May", year: "2019"}
    expect(updateDate(testCard, day)).toEqual(prediction);
  });
});
