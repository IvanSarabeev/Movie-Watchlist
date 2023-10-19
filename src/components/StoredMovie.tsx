import React from "react";
import { IMovieExtended } from "../models/model";
import RemoveItem from "./RemoveItem";

type MyMoviesProps = {
  item: IMovieExtended;
  removeItemFromCollection: (imdbID: string) => void;
};

const StoredMovie = ({ item, removeItemFromCollection }: MyMoviesProps) => {
  return (
    <>
      <div className="group h-auto w-72 flex flex-col gap-4 p-3 border-b-2 border-b-[#E5E7EB] shadow-xl transition-all ease-in-out duration-200 hover:scale-105 hover:shadow-2xl hover:rounded-lg cursor-pointer">
        <div className="relative z-0">
          <img
            src={item?.Poster}
            alt={item?.Title}
            className="w-fit h-80 md:h-96 rounded-md object-contain md:object-cover aspect-auto group-hover:scale-100 group-hover:rounded-lg drop-shadow-md transition-all"
          />
          <RemoveItem
            item={item}
            removeItemFromCollection={removeItemFromCollection}
          />
        </div>
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
    </>
  );
};

export default StoredMovie;
