import React from "react";
import { ReactComponent as IconStar } from "../assets/svgs/star.svg";

type StarCountProps = {
  totalStars: number;
};

const StarCount = ({ totalStars }: StarCountProps) => {
  return (
    <div className="flex">
      {[...Array(10)].map((star, index) => (
        <IconStar
          key={index}
          fill={`${index < totalStars ? "yellow" : "none"}`}
          className="w-4 h-4 fill-yellow-300"
        />
      ))}
    </div>
  );
};

export default StarCount;
