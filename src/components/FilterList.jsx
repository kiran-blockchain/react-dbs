import React, { useState, useMemo } from "react";
import debounce from "lodash.debounce";

const FilterList =()=> {
  const [query, setQuery] = useState("");

  let names = ["kiran","Ravi","John","Joohn"];
 let filteredNames =[];
  if (query !== "") {
    filteredNames = names.filter((name) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 3000);
  }, []);

  return (
    <div>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Type a query..."
      />
      {filteredNames.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <div>{filteredNames.length === 0 && query !== "" && "No matches..."}</div>
    </div>
  );
};

export default FilterList;
