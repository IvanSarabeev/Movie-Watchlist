import React from "react";

type InputProps = {
  cumstomClassName: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ cumstomClassName, handleInputChange }: InputProps) => {
  const className = cumstomClassName;

  return (
    <>
      <input
        type="search"
        placeholder="Search for a movie"
        className={className}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Input;
