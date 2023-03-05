import React from "react";
import whitCounter from "../hoc";

const Click = ({ Counter, incrementCount }) => {
  return (
    <div>
      <div onClick={incrementCount} className="select-none">
        {Counter} Times hover
      </div>
    </div>
  );
};

export default whitCounter(Click, 5);
