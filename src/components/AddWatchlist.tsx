import React from "react";
import { ReactComponent as IconCirclePlus } from "../assets/svgs/plus-circle.svg";

type WatchListProps = {
  handleAddToWatchlist?: () => void;
};

const Watchlist = ({ handleAddToWatchlist }: WatchListProps) => {
  return (
    <>
      <button
        type="button"
        onClick={handleAddToWatchlist}
        className="inline-flex gap-x-1 items-center font-lato text-xs  hover:bg-sky-300 hover:rounded-md hover:p-0.5 hover:text-white transition-all ease-in-out"
      >
        <IconCirclePlus className="h-4 w-4" />
        Watchlist
      </button>
    </>
  );
};

export default Watchlist;
