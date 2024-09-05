import { createResource, For, Show, Suspense } from "solid-js"
import { Config } from "vike-solid/Config";
import { Head } from "vike-solid/Head";
import { navigate } from "vike/client/router";
import { MovieDetails } from "./types";

export function Movies() {
    const [movies] = createResource(getStarWarsMovies)
    const onNavigate = (id: string) => {
        navigate(`/${id}`);
    };
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            <Show when={movies()}>
                <Config title={`${movies()?.length} Star Wars movies`} />
                <Head>
                    <meta name="description" content={`List of ${movies.length} Star Wars movies.`} />
                </Head>
            </Show>
            <h1>Star Wars Movies</h1>
            <ol>
                <For each={movies()}>
                    {(movie) => (
                        <li>
                            <button onClick={() => onNavigate(movie.id)}>{movie.title}</button> ({movie.release_date})
                        </li>
                    )}
                </For>
            </ol>
            <p>
                Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
            </p>
        </Suspense>
    )
}

async function getStarWarsMovies(): Promise<MovieDetails[]> {
    // Simulate slow network
    await new Promise((r) => setTimeout(r, 3 * 1000));

    const response = await fetch("https://star-wars.brillout.com/api/films.json");
    let movies: MovieDetails[] = ((await response.json()) as any).results;
    movies = movies.map((movie: MovieDetails, i: number) => ({
        ...movie,
        id: String(i + 1),
    }));
    return movies;
}