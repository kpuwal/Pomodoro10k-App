import { store } from "../../../src/reduxToolkit/store";
import { initialState, createTimer, deleteTimer, selectTimer, clearTimersAS } from "../../../src/reduxToolkit/slices/timerSlice";

const newTimer = {
  idx: 0.123456,
  focus: { min: 90, sec: 0 },
  relax: { min: 30, sec: 0 },
};

beforeEach(() => {
  jest
    .spyOn(global.Math, 'random')
    .mockReturnValue(0.123456);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
  store.dispatch(clearTimersAS());
});

describe("ReduxToolkit timerSlice", () => {
  test("it creates new Timer", () => {
    let state = store.getState().timer;
    expect(state.timersList).toEqual(initialState.timersList);
    expect(state.timersList.length).toBe(2);

    const changedState = [...initialState.timersList, newTimer];
    store.dispatch(createTimer({focus: 90, relax: 30}));
    state = store.getState().timer;
    expect(state.timersList).toEqual(changedState);
    expect(state.timersList.length).toBe(3);
  });

  test("it deletes Timer from the list", () => {
    let state = store.getState().timer;
    expect(state.timersList).toEqual(initialState.timersList);
    expect(state.timersList.length).toBe(2);

    const changedState = [...initialState.timersList, newTimer];
    store.dispatch(createTimer({focus: 90, relax: 30}));
    state = store.getState().timer;
    expect(state.timersList).toEqual(changedState);
    expect(state.timersList.length).toBe(3);

    store.dispatch(deleteTimer(newTimer));
    state = store.getState().timer;
    expect(state.timersList).toEqual(initialState.timersList);
    expect(state.timersList.length).toBe(2);
  });

  test("it selects Timer from the list", () => {
    let state = store.getState().timer;
    store.dispatch(selectTimer(newTimer));
    state = store.getState().timer;
    expect(state.selected).toEqual(newTimer);
  });

  test("it clears TimersList to initial state", () => {
    let state = store.getState().timer;
    expect(state).toEqual(initialState);

    store.dispatch(createTimer({focus: 10, relax: 5}));
    store.dispatch(createTimer({focus: 20, relax: 10}));
    state = store.getState().timer;
    expect(state.timersList.length).toBe(4);

    store.dispatch(clearTimersAS());
    state = store.getState().timer;
    expect(state).toEqual(initialState);
  });
});
