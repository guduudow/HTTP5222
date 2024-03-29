import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <MovieList />
      </main>
      <Footer />
    </>
  );
}

export default App;
