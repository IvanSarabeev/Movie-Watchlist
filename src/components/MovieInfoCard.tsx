import React, { useEffect, useRef, useState } from "react";
import { IMovie } from "../models/model";
import { IMovieExtended } from "../models/model";
import { fetchMovieID } from "../services/apiService";
// import { ReactComponent as IconStar } from "../assets/svgs/star.svg";
import AddWatchlist from "../components/AddWatchlist";
import StarCount from "./StarCount";

type MovieInfoProps = {
  imdbID: string;
  selectedMovie: IMovie;
  setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
  handleAddToWatchlist?: () => void;
};

const MovieInfoCard = ({ imdbID, selectedMovie }: MovieInfoProps) => {
  const [movieInfo, setMovieInfo] = useState<IMovieExtended | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedMovie) {
      const handleFetchMovieInfo = async () => {
        try {
          const data = await fetchMovieID(imdbID);
          setMovieInfo(data);
          setIsLoading(false);
          console.log(data);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          setMovieInfo(null);
        }
      };

      handleFetchMovieInfo();
    } else {
      setIsLoading(true);
      setMovieInfo(null);
    }
  }, [imdbID, selectedMovie]);

  const totalStars = Math.round(10);

  return (
    <article
      ref={divRef}
      className="w-auto gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex flex-col lg:flex-row py-5 px-8 items-center justify-center border-b-gray-200 mx-auto"
    >
      {isLoading ? (
        <h3>Data is Loading..</h3>
      ) : (
        <>
          {movieInfo ? (
            <>
              <img
                src={movieInfo?.Poster}
                className="h-80 lg:h-96 w-fit rounded-lg object-cover aspect-auto"
                alt={movieInfo?.Title}
              />
              <article className="group font-inter ">
                <h2 className="">Movie: {movieInfo?.Title}</h2>
                <span className="inline-flex gap-x-2 items-center">
                  <h3 className="">IMDB Rating: {movieInfo?.imdbRating}</h3>
                  <StarCount totalStars={totalStars} />
                  {/* <IconStar className="w-4 h-4 fill-yellow-300" /> */}
                </span>
                <h4 className="">Language: {movieInfo?.Language}</h4>
                <h5 className="">Release: {movieInfo?.Released}</h5>
                <h5 className="">Runtime: {movieInfo?.Runtime}</h5>
                <h6 className="">Genre: {movieInfo?.Genre}</h6>
                <h6 className="">Director: {movieInfo?.Director}</h6>
                <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl font-lato text-base leading-5 text-[#6B7280] group-hover:text-black">
                  <b className="text-black font-medium group-hover:text-[#6B7280]">
                    Plot:
                  </b>{" "}
                  {movieInfo?.Plot}
                </p>
                <h5>
                  Ratings{" "}
                  {movieInfo?.Ratings.map((item, index) => (
                    <h2 key={index}>{item?.Value}</h2>
                  ))}
                </h5>

                <span>
                  {/* Add to your Watchlist */}
                  <AddWatchlist />
                </span>
              </article>
            </>
          ) : (
            <h3>No movie info available.</h3>
          )}
        </>
      )}
    </article>
  );
};

export default MovieInfoCard;
