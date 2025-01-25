import React from "react";

const Filter = ({ onFilter, filter }) => {
  const checkhandler = (event) => {
    const flag = event.target.checked;
    if (flag) {
      onFilter("yes");
    } else {
      onFilter("");
    }
  };
  return (
    <div className="content-center">
      <form className=" h-fit w-fit flex flex-row gap-2 ">
        <input
          className=" h-7 w-7"
          type="checkbox"
          value={filter}
          onChange={checkhandler}
        />
        <h1>Premium</h1>
      </form>
    </div>
  );
};

export default Filter;
