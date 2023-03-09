export const actionTypes = {
  VIDEO: "VIDEO",
};

export const video = (data) => (dispatch) => {
  return dispatch({ type: actionTypes.VIDEO, payload: data });
};
