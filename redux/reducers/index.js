import { actionTypes } from "../actions";

export const exampleInitialState = {};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.VIDEO:
      return Object.assign({}, state, {
        ...action,
      });
    default:
      return state;
  }
};

export default reducer;
