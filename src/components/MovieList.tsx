import React from "react";
import { IMovie } from "../models/model";
// import Watchlist from "./AddWatchlist";

type MovieListProps = {
  item: IMovie;
  // handleAddToWatchlist: () => void;
  setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
  movie: IMovie[];
};

const MovieList = ({
  item,
  movie,
  // handleAddToWatchlist,
  setSelectedMovie,
}: MovieListProps) => {
  return (
    <div
      onClick={() => {
        const selectedMovie = movie.find(
          (movie) => movie.imdbID === item.imdbID
        );
        setSelectedMovie(selectedMovie);
      }}
      className="group h-auto w-72 flex flex-col gap-8 p-3 border-b-2 border-b-[#E5E7EB] shadow-xl transition-all ease-in-out duration-200 hover:scale-105 cursor-pointer"
    >
      <img
        src={item.Poster}
        alt={item.Title}
        className="w-fit h-80 md:h-96 rounded-md object-cover aspect-auto group-hover:scale-100 group-hover:rounded-lg drop-shadow-md transition-all "
      />
      <article>
        <span className="flex items-center justify-between">
          <h3 className="text-lg font-inter font-medium text-black leading-5 truncate overflow-hidden">
            {item.Title}
          </h3>
          {/* <Watchlist handleAddToWatchlist={handleAddToWatchlist} /> */}
          {/* <Watchlist /> */}
        </span>
        <span className="flex items-center justify-between my-2">
          <h4>Year: {item.Year}</h4>
          <h5 className=" capitalize">Type: {item.Type}</h5>
        </span>
      </article>
    </div>
  );
};

export default MovieList;
