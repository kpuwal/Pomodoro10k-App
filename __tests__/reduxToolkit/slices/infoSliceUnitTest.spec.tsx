import { store } from "../../../src/reduxToolkit/store";
import { mode, message } from "../../../src/reduxToolkit/slices/infoSlice";
import { MODE, MESSAGE } from "../../../src/config/constants";

const initialState = {
  mode: MODE[0], 
  message: MESSAGE[0],
}

describe("ReduxToolkit infoSlice", () => {
  test("it changes displayed Mode", () => {
    let state = store.getState().info;
    expect(state.mode).toBe(initialState.mode);

    const changedState = MODE[1];
    store.dispatch(mode(1));
    state = store.getState().info;
    expect(state.mode).toEqual(changedState);

    const changeStateBack = MODE[0];
    store.dispatch(mode(0));
    state = store.getState().info;
    expect(state.mode).toEqual(changeStateBack);
  });

  test("it changes displayed Message", () => {
    let state = store.getState().info;
    expect(state.message).toBe(initialState.message);

    const changedState = MESSAGE[1];
    store.dispatch(message(1));
    state = store.getState().info;
    expect(state.message).toEqual(changedState);

    const changeStateBack = MESSAGE[0];
    store.dispatch(message(0));
    state = store.getState().info;
    expect(state.message).toEqual(changeStateBack);
  });
});
