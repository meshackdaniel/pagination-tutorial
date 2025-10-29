import React from "react";
import { movies } from "../lib/movies";

const Movies = ({
  itemsPerPage,
  currentPage,
}: {
  itemsPerPage: number;
  currentPage: number;
    }) => {
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMovies = movies.slice(startIndex, endIndex);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 items-start">
        {paginatedMovies.map((movie: any) => (
          <div
            key={movie.title}
            className="rounded-lg overflow-hidden bg-white shadow-md flex flex-col"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
