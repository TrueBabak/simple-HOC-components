import React, { useState } from "react";

const Over = () => {
  const [Over, setOver] = useState(0);
  return (
    <div>
      <div>{Over} Times Over</div>
    </div>
  );
};

export default Over;
