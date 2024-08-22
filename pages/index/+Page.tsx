import { createResource, For, Suspense } from "solid-js";
import { Counter } from "../../components/Counter.jsx";
import { fetchMovies } from "../../utils/api.js";

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <h3>Star Wars Movies</h3>
      <MovieList />
    </>
  );
}

function MovieList() {
  const [movies] = createResource(fetchMovies)

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <ol>
        <For each={movies()}>
          {(movie) => (
            <li>
              {movie.title} ({movie.release_date})
            </li>
          )}
        </For>
      </ol>
    </Suspense>
  )
}