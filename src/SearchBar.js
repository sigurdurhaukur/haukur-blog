import React from "react";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: "95.6%",
    background: "var(--accent)",
    border: "none",
    borderRadius: "var(--border-radius)",
    padding: "0.8rem",
    fontSize: "17px",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Leita af..."}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
