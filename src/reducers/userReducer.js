const initialState = {
  username: "Max",
};
const SET_USERNAME = "SET_USERNAME";
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});
export default userReducer;
