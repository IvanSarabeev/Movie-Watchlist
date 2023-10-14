import React from "react";
import { IMovie } from "../../models/model";

type MovieCardProps = {
  item: IMovie;
  index: number;
};

const MovieCard = ({ item, index }: MovieCardProps) => {
  return (
    <div key={index} className="flex max-w-md h-auto">
      <img src={item.Poster} alt={item.Title} className=" w-28 h-40" />
      <article>
        <h3 className="text-lg font-inter font-medium text-black leading-5">
          {item.Title}
        </h3>
        <span>
          <p></p>
        </span>
      </article>
    </div>
  );
};

export default MovieCard;
