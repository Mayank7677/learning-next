import { movies } from "./db";

// export const GET = async () => {
//   return Response.json(movies);
// };

export const POST = async (req) => {
  let movie = await req.json();
  console.log("movie : ", movie);

  const newMovie = { ...movie };

  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
};

export const GET = async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filterMovies = query
    ? movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    : movies;

  return new Response(JSON.stringify(filterMovies));
};
