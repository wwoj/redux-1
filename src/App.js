import logo from './logo.svg';
import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer';
import ActorsContainer from './app/actors/components/MoviesContainer';
import MovieForm from './app/actors/components/MoviesForm';
import BeersContainer from './app/beers/components/BeersContainer';

function App() {
  return (
    <div className="App">
      <MoviesContainer/>
      <MovieForm/>
      <ActorsContainer/>
      <BeersContainer/>
    </div>
  );
}

export default App;
