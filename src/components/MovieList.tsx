import React from "react";
import { IMovie } from "../models/model";

type MovieListProps = {
  item: IMovie;
  movie: IMovie[];
  setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
};

const MovieList = ({ item, movie, setSelectedMovie }: MovieListProps) => {
  const handleSelectedMovie = () => {
    const selectedMovie = movie.find((movie) => movie.imdbID === item.imdbID);

    setSelectedMovie(selectedMovie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleSelectedMovie}
      className="group h-auto w-72 flex flex-col gap-8 p-3 border-b-2 border-b-[#E5E7EB] shadow-xl transition-all ease-in-out duration-200 hover:scale-105 hover:shadow-2xl hover:rounded-lg cursor-pointer"
    >
      <img
        src={item.Poster}
        alt={item.Title}
        loading="lazy"
        className="-z-10 w-auto h-80 md:h-96 rounded-md object-contain md:object-cover aspect-auto group-hover:scale-100 group-hover:rounded-lg drop-shadow-2xl mx-auto transition-all"
      />
      <article>
        <span className="flex items-center justify-between">
          <h3 className="text-lg font-inter font-medium text-black leading-5 truncate overflow-hidden">
            {item.Title}
          </h3>
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
