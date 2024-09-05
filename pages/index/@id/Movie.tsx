import { createResource, ErrorBoundary, Show, Suspense } from "solid-js";
import { MovieDetails } from "../types";
import { Config } from "vike-solid/Config";

export function Movie(props: { id: string }) {
    const [movie, { refetch }] = createResource(() => props.id, (id) => getStarWarsMovie(id))

    return (
        <Suspense fallback={<p>Loading movie {props.id}</p>} >
            <ErrorBoundary fallback={(err, reset) => (
                <>
                    <div>Loading movie {props.id} failed</div>
                    <div>{err.toString()}</div>
                    <button
                        onClick={async () => {
                            reset()
                            await refetch()
                        }}
                    >
                        Retry
                    </button>
                </>
            )}>
                <Show when={movie()}>
                    <Config
                        title={movie()?.title}
                        Head={
                            <meta name="description" content={`Star Wars Movie ${movie()?.title} from ${movie()?.director}`} />
                        }
                    />
                </Show>
                <h1>Star Wars Movies</h1>
                <ul>
                    <li>
                        Title: <b>{movie()?.title}</b>
                    </li>
                    <li>
                        Release date: <b>{movie()?.release_date}</b>
                    </li>
                </ul>
                <p>
                    Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
                </p>
            </ErrorBoundary>
        </Suspense>
    )
}

async function getStarWarsMovie(id: string): Promise<MovieDetails> {
    await new Promise((r) => setTimeout(r, 500));

    if (Math.random() > 0.4) {
        throw new Error("Failed to fetch");
    }

    const response = await fetch(`https://star-wars.brillout.com/api/films/${id}.json`);
    return response.json();
}
