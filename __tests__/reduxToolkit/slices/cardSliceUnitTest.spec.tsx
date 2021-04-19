import { store } from "../../../src/reduxToolkit/store";
import { initialState, createCard, deleteCard, selectCard, clearCardsAS } from "../../../src/reduxToolkit/slices/cardSlice";
import { newCard } from "../../helpers/reduxToolkit";

const currentDay = () => new Date(Date.now());

beforeEach(() => {
  jest
    .spyOn(global.Math, 'random')
    .mockReturnValue(0.9876);

  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() => 1530518207007);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
  store.dispatch(clearCardsAS());
});

describe("ReduxToolkit cardSlice", () => {
  test("it creates new Card", () => {
    let state = store.getState().card;
    expect(state.cardsList).toEqual(initialState.cardsList);
    expect(state.cardsList.length).toBe(1);

    const changedState = [...initialState.cardsList, newCard];
    store.dispatch(createCard({color: "#000000", title: "Another Goal"}));
    state = store.getState().card;
    expect(state.cardsList).toEqual(changedState);
    expect(state.cardsList.length).toBe(2);
  });

  test("it deletes Timer from the list", () => {
    let state = store.getState().card;
    expect(state.cardsList).toEqual(initialState.cardsList);
    expect(state.cardsList.length).toBe(1);

    const changedState = [...initialState.cardsList, newCard];
    store.dispatch(createCard({color: "#000000", title: "Another Goal"}));
    state = store.getState().card;
    expect(state.cardsList).toEqual(changedState);
    expect(state.cardsList.length).toBe(2);

    store.dispatch(deleteCard(newCard));
    state = store.getState().card;
    expect(state.cardsList).toEqual(initialState.cardsList);
    expect(state.cardsList.length).toBe(1);
  });

  test("it selects Card from the list", () => {
    let state = store.getState().card;
    store.dispatch(selectCard(newCard));
    state = store.getState().card;
    expect(state.selected).toEqual(newCard);
  });

  test("it clears TimersList to initial state", () => {
    let state = store.getState().card;
    expect(state).toEqual(initialState);

    store.dispatch(createCard({color: "#000", title: "Goal"}));
    store.dispatch(createCard({color: "#fff", title: "Other Goal"}));
    state = store.getState().card;
    expect(state.cardsList.length).toBe(3);

    store.dispatch(clearCardsAS());
    state = store.getState().card;
    expect(state).toEqual(initialState);
  });
});
