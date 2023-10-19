import React from "react";
import { IMovieExtended } from "../models/model";
// import RemoveWatchlist from "./RemoveWatchlist";

type MyMoviesProps = {
  item: IMovieExtended;
  // removeFromCollection: (imdbIDToRemove: string) => void;
};

const StoredMovie = ({ item }: MyMoviesProps) => {
  return (
    <>
      <div className="relative z-0 w-auto h-auto">
        <img
          src={item?.Poster}
          className="relative w-fit h-80 lg:h-96 rounded-md lg:rounded-lg shadow-lg hover:shadow-xl transition-shadow object-contain md:object-cover aspect-auto"
          alt={item?.Title}
        />
        {/* <RemoveWatchlist
          item={item}
          removeFromCollection={removeFromCollection}
        /> */}
      </div>
      <article className="w-auto h-auto font-inter leading-6 font-medium tracking-normal text-left">
        <h2 className="text-xl">
          <b>Movie</b>: {item?.Title}
        </h2>
        <span className="inline-flex gap-x-2 items-center">
          <h3>
            <b>IMDB Rating</b>: {item?.imdbRating}
          </h3>
        </span>
        <h4>
          <b>Language</b>: {item?.Language}
        </h4>
        <h5>
          <b>Release</b>: {item?.Released}
        </h5>
        <h5>
          <b>Runtime</b>: {item?.Runtime}
        </h5>
        <h6>
          <b>Genre</b>: {item?.Genre}
        </h6>
        <h6>
          <b>Director</b>: {item?.Director}
        </h6>
        <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl font-lato text-base text-justify md:text-left tracking-wide leading-5 lg:leading-6">
          <b>Plot</b>: {item?.Plot}
        </p>
      </article>
    </>
  );
};

export default StoredMovie;
