import { combineReducers } from "redux";
import actorsReducer from "./app/actors/duck";
import moviesReducer from "./app/movies/duck";
import beersReducer from "./app/beers/duck";

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducer,
  beers: beersReducer,
});

export default rootReducer;