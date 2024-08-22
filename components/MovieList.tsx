import { For, Suspense, createResource } from "solid-js";
import { fetchMovies } from "../utils/api";

export function MovieList() {
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