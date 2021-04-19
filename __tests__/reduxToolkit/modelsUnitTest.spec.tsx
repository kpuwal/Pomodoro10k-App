import { Timer, Card } from "../../src/reduxToolkit/models";
import { newTimer, newCard } from "../helpers/reduxToolkit";

beforeEach(() => {
  jest
    .spyOn(global.Math, 'random')
    .mockReturnValue(0.9876);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

describe("Model", () => {
  test("it should create correct Timer object", () => {
    const input = {focus: 15, relax: 5};
    expect(Timer(input)).toStrictEqual(newTimer);
  });

  test("it should create correct Card object", () => {
    expect(Card("#000000", "Another Goal")).toStrictEqual(newCard);
  });
});