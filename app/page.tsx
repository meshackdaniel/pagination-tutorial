import React from "react";
import Pagination from "./components/Pagination";
import Movies from "./components/Movies";
import { movies } from "./lib/movies";

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const paginatedMovies = movies.slice(startIndex, endIndex);
  return (
    <div className="w-5/6 mx-auto mt-15 mb-10">
      <h1 className="mb-10 font-bold text-center text-4xl">My Watchlist</h1>
      <Movies itemsPerPage={itemsPerPage} currentPage={currentPage} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
