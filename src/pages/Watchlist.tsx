import React from "react";
import { IMovie } from "../models/model";
import { Link } from "react-router-dom";
import Icon from "../assets/images/Icon.png";
import MyWatchlist from "../components/MyWatchlist";
import { ReactComponent as IconCircle } from "../assets/svgs/plus-circle.svg";

type WatchlistProps = {
  watchlist: IMovie[];
};

const Watchlist = ({ watchlist }: WatchlistProps) => {
  return (
    <main className="min-h-screen w-auto">
      <header className="z-0 h-52 w-auto font-inter flex items-center justify-around drop-shadow-xl bg-mini-wallpaper bg-black">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-6 tracking-tighter">
          My Watchlist
        </h1>
        <Link
          to="/"
          className="text-white text-sm leading-5 inline-flex items-center gap-x-1"
        >
          Search for movies
        </Link>
      </header>
      <section className="h-auto w-full flex flex-col items-center justify-center mx-auto mt-16 mb-10">
        {watchlist.length > 0 ? (
          watchlist.map((item, index) => {
            return <MyWatchlist key={index} item={item} />;
          })
        ) : (
          <>
            <div className="h-full w-auto flex flex-col items-center justify-center">
              <img
                src={Icon}
                alt="film-icon"
                className="w-16 h-14 object-contain aspect-square"
              />
              <h2 className="font-inter text-lg text-[#DFDDDD] leading-5 mt-2">
                Your watchlist is looking a little empty...
              </h2>
              <Link to="/" className="inline-flex gap-x-2 items-center mt-2">
                <IconCircle className="w-4 h-4" />
                Let's add some movies!
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Watchlist;
