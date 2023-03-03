import React, { useState } from "react";

const Over = () => {
  const [Over, setOver] = useState(0);
  const overFunc = () => {
    console.log("over");
    setOver(Over + 1);
  };
  return (
    <div>
      <div onClick={overFunc}>{Over} Times Over</div>
    </div>
  );
};

export default Over;
