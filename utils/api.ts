import { isServer } from "solid-js/web";

type Movie = {
  title: string;
  release_date: string;
};

export const fetchMovies = async () => {
  console.log("fetchMovies start");
  console.log(isServer ? "on server" : "on client");

  const response = await fetch("https://star-wars.brillout.com/api/films.json");

  // Simulate slow network
  await new Promise((r) => setTimeout(r, 6 * 1000));
  const movies: Movie[] = (await response.json()).results;

  console.log("fetchMovies done");

  return movies;
};
