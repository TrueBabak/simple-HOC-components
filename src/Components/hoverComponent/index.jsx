import React from "react";
import WhitCounter from "../hoc";

const Hover = ({ Counter, incrementCount, name }) => {
  return (
    <div>
      <div onMouseOver={incrementCount} className="select-none">
        {Counter} Times hover
      </div>
    </div>
  );
};

export default WhitCounter(Hover, 2);
