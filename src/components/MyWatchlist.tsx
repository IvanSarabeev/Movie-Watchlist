import React from "react";
import { IMovie } from "../models/model";

type MyWatchlistProps = {
  item: IMovie;
};

const MyWatchlist = ({ item }: MyWatchlistProps) => {
  return (
    <div className="group h-auto w-auto lg:w-[500px] xl:w-[650px] flex flex-col md:flex-row gap-8 py-4 border-b-2 border-b-[#E5E7EB] transition-all ease-in-out duration-200 hover:scale-110">
      <img
        src={item.Poster}
        alt={item.Title}
        className="w-28 h-40 rounded-md object-cover aspect-video group-hover:scale-105 transition-all "
      />
      <article>
        <h3 className="text-lg font-inter font-medium text-black leading-5">
          {item.Title}
        </h3>
        <span className="flex items-center justify-start my-2">
          {/* < handleAddToWatchlist={handleAddToWatchlist} /> */}
        </span>
        <p className="font-lato text-base leading-5 text-[#6B7280] group-hover:text-black">
          Young Blade Runner K's discovery of a long-buried secret leads him to
          track down former Blade Runner Rick Deckard, who's been missin...
        </p>
      </article>
    </div>
  );
};

export default MyWatchlist;
