import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../models/model";
import { ReactComponent as IconFilm } from "../assets/svgs/film.svg";
import Icon from "../assets/images/Icon.png";
import MovieList from "../components/MovieList";
import SearchInput from "../components/SearchInput";
import MovieInfoCard from "../components/MovieInfoCard";

type HomeProps = {
  movie: IMovie[];
  setMovie: React.Dispatch<React.SetStateAction<any[]>>;
  handleSearch: () => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleAddToWatchlist: (imdbID: string) => void;
  selectedMovie: IMovie | undefined;
  setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
};

const Home = ({
  movie,
  setMovie,
  handleSearch,
  setSearchQuery,
  handleAddToWatchlist,
  selectedMovie,
  setSelectedMovie,
}: HomeProps) => {
  const [showResult, setShownResult] = useState<boolean>(false);

  const handleResult = () => {
    handleSearch();
    const hasResult = movie.length > 0;

    setShownResult(hasResult);
  };

  return (
    <main className="min-h-screen w-auto">
      <header className="z-0 h-52 w-auto font-inter flex items-center justify-around drop-shadow-xl bg-mini-wallpaper bg-black">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-6 tracking-tighter">
          Find your film
        </h1>
        <Link
          to="/my-watchlist"
          className="text-white text-xs sm:text-sm md:text-base leading-5 inline-flex items-center gap-x-1 hover:underline hover:underline-offset-4"
        >
          <IconFilm className="w-5 h-5" />
          My Watchlist
        </Link>
      </header>
      <div className="z-10 flex items-center justify-center -mt-5 mx-auto">
        <SearchInput
          handleSearch={handleResult}
          setSearchQuery={setSearchQuery}
        />
      </div>
      {selectedMovie ? (
        <MovieInfoCard
          imdbID={selectedMovie.imdbID}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          handleAddToWatchlist={handleAddToWatchlist}
        />
      ) : null}
      <section className="-z-10 h-auto w-full flex flex-wrap gap-y-4 md:gap-y-6 lg:gap-y-8 items-center justify-around mx-auto mt-16 mb-10 bg-transparent">
        {showResult ? (
          movie.map((item, index) => {
            return (
              <MovieList
                key={index}
                item={item}
                movie={movie}
                setSelectedMovie={setSelectedMovie}
              />
            );
          })
        ) : (
          <>
            <div className="h-full w-auto flex flex-col items-center justify-center">
              <img
                src={Icon}
                alt="film-icon"
                className="w-16 h-14 object-contain aspect-square"
              />
              <h2 className="font-inter text-xl text-slate-600 leading-5 mt-2">
                {showResult ? "Movie not found" : "Start exploring"}
              </h2>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Home;
