"use client";

import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="items-center flex h-14 w-full">
      <input
        className="bg-white outline-none text-black py-4 pl-4 flex-1"
        placeholder="Enter keywords"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="bg-lightgray h-full w-20 outline-none border-none flex items-center justify-center">
        <Search className="w-5 h-5 text-purple" />
      </button>
    </div>
  );
};

export default SearchBar;
