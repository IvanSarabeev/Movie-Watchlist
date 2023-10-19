import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/images/Icon.png";
import { ReactComponent as IconCircle } from "../assets/svgs/plus-circle.svg";

const EmptyMovie = () => {
  return (
    <>
      <div className="h-full w-auto flex flex-col items-center justify-center">
        <img
          src={Icon}
          alt="film-icon"
          className="w-16 h-14 object-contain aspect-square"
        />
        <h2 className="font-inter text-base lg:text-lg text-[#DFDDDD] leading-5 mt-2">
          Your watchlist is looking a little empty...
        </h2>
        <Link
          to="/"
          className="inline-flex gap-x-2 text-base lg:text-lg items-center mt-2"
        >
          <IconCircle className="w-4 h-4" />
          Let's add some movies!
        </Link>
      </div>
    </>
  );
};

export default EmptyMovie;
