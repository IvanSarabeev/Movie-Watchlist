import React, { useEffect, useRef, useState } from "react";
import { fetchMovieID } from "../services/apiService";
import { IMovie, IMovieExtended } from "../models/model";
import { ReactComponent as IconSpinner } from "../assets/svgs/spinner.svg";
import { ReactComponent as IconBookmark } from "../assets/svgs/bookmark.svg";
import Button from "./html/Button";

type MovieInfoProps = {
  imdbID: string;
  selectedMovie: IMovie;
  setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
  handleAddToWatchlist: (imdbID: string) => void;
};

const MovieInfoCard = ({
  imdbID,
  selectedMovie,
  handleAddToWatchlist,
}: MovieInfoProps) => {
  const [movieInfo, setMovieInfo] = useState<IMovieExtended | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedMovie) {
      const handleFetchMovieInfo = async () => {
        setTimeout(async () => {
          try {
            const data = await fetchMovieID(imdbID);
            setMovieInfo(data);
            setIsLoading(false);
            console.log(data);
          } catch (error) {
            console.log(error);
            setIsLoading(true);
            setMovieInfo(null);
          }
        }, 1000);
      };

      handleFetchMovieInfo();
    } else {
      setIsLoading(false);
      setMovieInfo(null);
    }
  }, [imdbID, selectedMovie]);

  const handleAddToCollection = () => {
    if (!btnClicked) {
      console.log(imdbID);
      handleAddToWatchlist(imdbID);
      setBtnClicked(true);
    }
  };

  return (
    <article
      ref={divRef}
      className="relative z-0 w-11/12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex flex-col md:flex-row py-5 px-8 items-center justify-center border-b-gray-200 shadow-xl hover:shadow-2xl transition-shadow mt-4 mx-auto"
    >
      {isLoading ? (
        <h3>Data is Loading..</h3>
      ) : (
        <>
          {movieInfo && movieInfo.Poster !== "N/A" ? ( //Check if the poster is not "N/A"
            <>
              <Button
                disabled={btnClicked}
                movieInfo={movieInfo.Title}
                handleAddToCollection={handleAddToCollection}
                customClassName="group w-auto h-auto absolute top-[6%] right-[8.5%] md:top-[8%] md:right-[2.5%] z-10 inline-flex gap-x-2 items-center justify-center text-white bg-gradient-to-tr from-slate-600 to-sky-800 hover:from-cyan-500 hover:to-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-2 transition-all"
              >
                Add to
                <IconBookmark className="h-4 w-4 group-hover:fill-yellow-300 text-slate-800" />
              </Button>
              <div className="relative z-0 w-auto h-auto">
                <img
                  src={movieInfo?.Poster}
                  alt={movieInfo?.Title}
                  loading="lazy"
                  className="relative w-fit h-80 lg:h-96 rounded-md lg:rounded-lg shadow-lg hover:shadow-xl transition-shadow object-contain md:object-cover aspect-auto"
                />
              </div>
              <article className="w-auto h-auto font-inter leading-6 font-medium tracking-normal text-left">
                <h3>
                  <b>Movie:</b> {movieInfo?.Title}
                </h3>
                <span className="inline-flex gap-x-2 items-center">
                  <h3>
                    <b>IMDB Rating</b>: {movieInfo?.imdbRating}
                  </h3>
                </span>
                <h4>
                  <b>Language</b>: {movieInfo?.Language}
                </h4>
                <h5>
                  <b>Release</b>: {movieInfo?.Released}
                </h5>
                <h5>
                  <b>Runtime</b>: {movieInfo?.Runtime}
                </h5>
                <h6>
                  <b>Genre</b>: {movieInfo?.Genre}
                </h6>
                <h6>
                  <b>Director</b>: {movieInfo?.Director}
                </h6>
                <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl font-lato text-base text-justify md:text-left tracking-wide leading-5 lg:leading-6 drop-shadow">
                  <b>Plot</b>: {movieInfo?.Plot}
                </p>
              </article>
            </>
          ) : (
            <>
              <h3>Loading Movie data.</h3>
              <IconSpinner className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
            </>
          )}
        </>
      )}
    </article>
  );
};

export default MovieInfoCard;
