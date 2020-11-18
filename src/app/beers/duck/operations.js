import actions from "./actions";

const fetchMovies = async () => {
  const response = await fetch(
    "https://us-central1-irfighters-beer.cloudfunctions.net/api1/beer",
    { method: "GET" }
  );
  const json = await response.json();
    
  return json;
};

export const getAllMovies = () => async (dispatch) => {
   const movies = await fetchMovies();
    console.log("Wynik to: ",movies)
  movies.map((movie) => dispatch(actions.add(movie)));
};
