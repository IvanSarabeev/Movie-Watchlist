import React from "react";
import RemoveItem from "./RemoveItem";
import { IMovieExtended } from "../models/model";

type MyMoviesProps = {
  item: IMovieExtended;
  removeItemFromCollection: (imdbID: string) => void;
};

const StoredMovie = ({ item, removeItemFromCollection }: MyMoviesProps) => {
  return (
    <>
      <div className="z-0 group h-auto w-72 flex flex-col gap-4 p-3 border-b-2 border-b-[#E5E7EB] shadow-xl hover:scale-105 hover:shadow-2xl hover:rounded-lg transition-all ease-in-out duration-200">
        {" "}
        <div className="relative -z-10">
          <img
            src={item?.Poster}
            alt={item?.Title}
            className="-z-10 w-auto h-80 md:h-96 rounded-md object-contain md:object-cover aspect-auto drop-shadow-xl mx-auto group-hover:scale-100 group-hover:rounded-lg transition-all"
          />
        </div>
        <article>
          <span className="flex justify-between mx-auto">
            <h3 className="text-lg font-inter font-medium text-black leading-5 truncate overflow-hidden">
              {item.Title}
            </h3>
            <RemoveItem
              item={item}
              removeItemFromCollection={removeItemFromCollection}
            />
          </span>
          <span className="flex items-center justify-between my-2">
            <h4>Year: {item.Year}</h4>
            <h5 className="capitalize">Type: {item.Type}</h5>
          </span>
        </article>
      </div>
    </>
  );
};

export default StoredMovie;
