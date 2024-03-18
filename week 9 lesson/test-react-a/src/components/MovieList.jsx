import { useState } from "react";
import Movie from "./Movie";

let movieArray = [
  {
    title: "The Dark Knight",
    year: "2008",
  },
  {
    title: "The King's Man",
    year: "2021",
  },
];

export default function MovieList() {
  const [moviesList, setMoviesList] = useState(movieArray);

  function handleForm(e) {
    e.preventDefault();
    let newMovie = {
      title: e.target.title.value,
      year: e.target.year.value,
    };
    setMoviesList([
      //this for arrays
      ...moviesList, //spread operator it clones a previously existing array.
      newMovie,
    ]);

    // setMoviesList((prev) => ({ //this for objects
    //   ...prev,
    //   newMovie
    // }))
  }

  return (
    <div>
      <h2>Movies</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Movie Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="year">Release Year:</label>
        <input type="text" id="year" name="year" />
        <button type="submit">Add Movie</button>
      </form>
      {moviesList.map((m) => (
        <Movie key={m.title + m.year} title={m.title} year={m.year} />
      ))}
    </div>
  );
}
