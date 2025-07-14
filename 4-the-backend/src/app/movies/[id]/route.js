import { movies } from "../db";

export const GET = async (_req, { params }) => {
  const { id } = await params;

  const movie = movies.find((m) => m.id === +id);

  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const body = await req.json();

  const movie = await movies.find((m) => m.id === +id);

  if (!movie) return new Response("Movie not found", { status: 404 });

  const updateTitle = body.title ? (movie.title = body.title) : movie.title;
  const updateYear = body.year ? (movie.year = body.year) : movie.year;

  return new Response(JSON.stringify(movie, { status: 200 }));
};

export const DELETE = async (_req, { params }) => {
  const { id } = await params;

  const index = movies.findIndex((m) => m.id === +id);

  if (index === -1) return new Response("Movie not found", { status: 404 });

  movies.splice(index, 1);

  return new Response("Movie deleted successfully", { status: 200 });
};
