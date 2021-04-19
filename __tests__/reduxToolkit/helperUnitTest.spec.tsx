import { updateSelectedCard } from "../../src/reduxToolkit/helper";
import { initList, updatedList } from "../helpers/reduxToolkit";

const currentDay = () => new Date(Date.now());

describe("Update Card", () => {
  test("it updates the right Card with correctly calculated values", () => {
    jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() => 1530518207007);

    const idx = 0.1234;
    const amount = 10;
    const day = currentDay();
    expect(updateSelectedCard(initList, idx, amount, day)).toEqual(updatedList);
  });
});
