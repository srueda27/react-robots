import React from "react";

const Searchbox = ({ searchChange }) => {

  return (
    <div className="pa2">
      <input
        className="br3 pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for bots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
