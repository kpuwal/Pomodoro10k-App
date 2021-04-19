import { Timer, Card } from "../../src/reduxToolkit/models";

beforeEach(() => {
  jest
    .spyOn(global.Math, 'random')
    .mockReturnValue(0.1234);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

describe("Model", () => {
  test("it should return correct Timer object", () => {
    const newTimer = {
      idx: 0.1234,
      focus: { min: 15, sec: 0 },
      relax: { min: 5, sec: 0 }
    };
    const value = {focus: 15, relax: 5};
    expect(Timer(value)).toStrictEqual(newTimer);
  });

  test("it should return correct Card object", () => {
    const newCard = {
      idx: 0.1234,
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
      goal: "Goal",
      color: "#000000",
      dates: []
    };
    expect(Card("#000000", "Goal")).toStrictEqual(newCard);
  });
});