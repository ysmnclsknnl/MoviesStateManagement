import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        {" "}
        <Nav />
        <MovieList /> <AddMovie />
      </MovieProvider>
    </div>
  );
}

export default App;
