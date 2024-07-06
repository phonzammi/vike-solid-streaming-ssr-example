import { Suspense } from "solid-js";
import { MovieList } from "../../components/MovieList.jsx";
import { Counter } from "../../components/Counter.jsx";

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
      <Suspense>
        <MovieList />
      </Suspense>
    </>
  );
}
