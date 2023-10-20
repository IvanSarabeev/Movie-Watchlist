import React from "react";
import { IMovieExtended } from "../models/model";
import { Link } from "react-router-dom";
import StoredMovie from "../components/StoredMovie";
import EmptyMovie from "../components/EmptyMovie";

type WatchlistProps = {
  watchlist: IMovieExtended[];
  removeItemFromCollection: (imdbID: string) => void;
};

const Collection = ({
  watchlist,
  removeItemFromCollection,
}: WatchlistProps) => {
  return (
    <main className="min-h-screen w-auto">
      <header className="z-0 h-52 w-auto font-inter flex items-center justify-around drop-shadow-xl bg-mini-wallpaper bg-black">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-6 tracking-tighter">
          My Watchlist
        </h2>
        <Link
          to="/"
          className="text-white leading-5 inline-flex items-center gap-x-1 text-xs sm:text-sm md:text-base
hover:underline hover:underline-offset-4"
        >
          Search for movies
        </Link>
      </header>
      <section className="hh-auto w-full flex flex-wrap gap-y-4 md:gap-y-6 lg:gap-y-8 items-center justify-around mx-auto mt-16 mb-10">
        {watchlist.length > 0 ? (
          watchlist.map((item, index) => {
            return (
              <StoredMovie
                key={index}
                item={item}
                removeItemFromCollection={removeItemFromCollection}
              />
            );
          })
        ) : (
          <EmptyMovie />
        )}
      </section>
    </main>
  );
};

export default Collection;
