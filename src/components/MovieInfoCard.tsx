import React, { useEffect, useRef, useState } from "react";
import { IMovie, IMovieExtended } from "../models/model";
import { fetchMovieID } from "../services/apiService";
import { ReactComponent as IconSpinner } from "../assets/svgs/spinner.svg";
import AddWatchlist from "../components/AddWatchlist";
// import StarCount from "./StarCount";

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
    handleAddToWatchlist(imdbID);
  };

  return (
    <article
      ref={divRef}
      className="w-auto gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex flex-col md:flex-row py-5 px-8 items-center justify-center border-b-gray-200 mx-auto"
    >
      {isLoading ? (
        <h3>Data is Loading..</h3>
      ) : (
        <>
          {movieInfo && movieInfo.Poster !== "N/A" ? ( //Check if the poster is not "N/A"
            <>
              <div className="relative z-0 w-auto h-auto">
                <img
                  src={movieInfo?.Poster}
                  className="relative w-fit h-80 lg:h-96 rounded-md lg:rounded-lg shadow-lg hover:shadow-xl transition-shadow object-contain md:object-cover aspect-auto"
                  alt={movieInfo?.Title}
                />
                <AddWatchlist
                  movieInfo={movieInfo.Title}
                  handleAddToCollection={handleAddToCollection}
                />
              </div>
              <article className="w-auto h-auto font-inter leading-6 font-medium tracking-normal text-left">
                <h2 className="text-xl">
                  <b>Movie</b>: {movieInfo?.Title}
                </h2>
                <span className="inline-flex gap-x-2 items-center">
                  <h3>
                    <b>IMDB Rating</b>: {movieInfo?.imdbRating}
                  </h3>
                  {/* <StarCount totalStars={totalStars} /> */}
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
                <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl font-lato text-base text-justify md:text-left tracking-wide leading-5 lg:leading-6">
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
