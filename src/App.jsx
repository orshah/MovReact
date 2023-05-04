import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import "./App.css";
import { MovieListOne, MovieListTwo } from "./components/MoviesList/MovieList";

function App() {
  return (
    <>
      <Navigation />
      <Logo />
      <div className="container">
        <MovieListOne />
        <MovieListTwo />
      </div>
    </>
  );
}

export default App;
