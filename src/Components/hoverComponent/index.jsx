import React, { useState } from "react";

const Hover = () => {
  const [Hover, setHover] = useState(0);
  const hoverFunc = () => {
    console.log("hover");
    setHover(Hover + 1);
  };
  return (
    <div>
      <div onMouseOver={hoverFunc}>{Hover} Times hover</div>
    </div>
  );
};

export default Hover;
