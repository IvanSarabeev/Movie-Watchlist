import React from "react";
import { ReactComponent as IconFilm } from "../assets/svgs/film.svg";
import Icon from "../assets/images/Icon.png";
import SearchInput from "../components/search/SearchInput";

const Home = () => {
  return (
    <section className="h-screen w-auto">
      <header className="z-0 h-52 w-auto font-inter flex items-center justify-around drop-shadow-xl bg-mini-wallpaper bg-black">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-6 tracking-tighter">
          Find your film
        </h1>
        <button
          type="button"
          className="text-white text-sm leading-5 inline-flex items-center gap-x-1"
        >
          <IconFilm className="w-4 h-4" />
          My Watchlist
        </button>
      </header>
      <div className="z-10 flex items-center justify-center -mt-5 mx-auto">
        <SearchInput />
      </div>
      <section className="h-1/2 w-auto flex flex-col items-center justify-center mx-auto">
        <img
          src={Icon}
          alt="film-icon"
          className=" object-contain aspect-square"
        />
        <h2 className="font-inter text-lg text-[#DFDDDD] leading-5 mt-2">
          Start exploring
        </h2>
      </section>
    </section>
  );
};

export default Home;
