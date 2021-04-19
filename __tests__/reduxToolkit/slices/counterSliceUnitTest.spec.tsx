import { store } from "../../../src/reduxToolkit/store";
import { cycleCounter, startCounter, pauseCounter } from "../../../src/reduxToolkit/slices/counterSlice";

const initialState = {
  cycle: true,
  start: false,
  pause: false,
};

describe("ReduxToolkit counterSlice", () => {
  test("it changes counter Cycle state", () => {
    let state = store.getState().counter;
    expect(state.cycle).toEqual(initialState.cycle);

    const changedState = false;
    store.dispatch(cycleCounter(false));
    state = store.getState().counter;
    expect(state.cycle).toEqual(changedState);

    const changeStateBack = true;
    store.dispatch(cycleCounter(true));
    state = store.getState().counter;
    expect(state.cycle).toEqual(changeStateBack);
  });

  test("it Starts and stops counter", () => {
    let state = store.getState().counter;
    expect(state.start).toEqual(initialState.start);

    store.dispatch(startCounter());
    state = store.getState().counter;
    expect(state.start).toEqual(true);

    store.dispatch(startCounter());
    state = store.getState().counter;
    expect(state.start).toEqual(false);
  });

  test("it Pauses and starts counter", () => {
    let state = store.getState().counter;
    expect(state.pause).toEqual(initialState.pause);

    const changedState = true;
    store.dispatch(pauseCounter(true));
    state = store.getState().counter;
    expect(state.pause).toEqual(changedState);

    const changeStateBack = false;
    store.dispatch(pauseCounter(false));
    state = store.getState().counter;
    expect(state.pause).toBe(changeStateBack);
  });
});
