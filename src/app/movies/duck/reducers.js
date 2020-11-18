import types from "./types";
const INITIAL_STATE = {
  listName: "Favourite",
  list: ["Rambo III", "Hakerzy", "Matrix",'HGW'],
};
const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        list: [...state.list, action.item],
      };
    case "RESET_MOVIES":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default moviesReducer;
