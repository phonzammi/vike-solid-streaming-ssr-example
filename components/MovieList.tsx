import { For } from "solid-js";
import { fetchMovies } from "../utils/api";
import { createQuery } from "@tanstack/solid-query";
import { QueryBoundary } from "./query-boundary";


export function MovieList() {
    const query = createQuery(() => ({
        queryKey: ["movies"],
        queryFn: fetchMovies
    }))

    return (
        <QueryBoundary
            query={query}
            loadingFallback={<p>Loading ...</p>}
            errorFallback={(err, retry) => (
                <div>
                    <div>{err.message}</div>
                    <button
                        onClick={() => {
                            retry()
                        }}
                    >
                        Retry
                    </button>
                </div>
            )}
        >
            {(movies) => (
                <For each={movies}>
                    {(movie) => (
                        <li>
                            {movie.title} ({movie.release_date})
                        </li>
                    )}
                </For>
            )}
        </QueryBoundary>
    )
}
