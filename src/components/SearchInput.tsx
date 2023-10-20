import React, { useRef } from "react";
import { ReactComponent as IconMagnify } from "../assets/svgs/magnify.svg";
import Input from "./html/Input";

type SearchProps = {
  handleSearch: () => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ handleSearch, setSearchQuery }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <span className="w-1/3 md:w-1/3 h-9 md:h-12 font-inter py-2 px-2 inline-flex gap-x-2 items-center rounded-tl-md rounded-bl-md border-2 border-[#D1D5D8] drop-shadow-md bg-white">
        <IconMagnify className="w-5 h-5" onClick={handleFocus} />
        <Input
          handleInputChange={handleInputChange}
          cumstomClassName="w-full text-xs sm:text-sm text-[#6B7280] leading-5 py-1.5 px-2 focus:rounded-lg selection:bg-slate-500 selection:text-white"
        />
      </span>
      <button
        type="button"
        onClick={handleSearch}
        className="w-28 h-9 md:h-12 flex items-center justify-center py-2 pl-4 pr-2 text-xs sm:text-sm leading-5 rounded-tr-md rounded-br-md drop-shadow-md bg-white border-2 border-b-[#D1D5D8] focus:bg-gradient-to-tr focus:border-0 hover:bg-gradient-to-tr from-slate-500 to-sky-400 hover:text-white transition-colors"
      >
        Search
      </button>
    </>
  );
};

export default SearchInput;
