import React, { useState } from "react";

const WhitCounter = (WrapperComponents) => {
  const UpdateComponent = () => {
    const [Counter, setCounter] = useState(0);
    const incrementCount = () => {
      setCounter(Counter + 1);
    };
    return (
      <WrapperComponents Counter={Counter} incrementCount={incrementCount} />
    );
  };
  return UpdateComponent;
};

export default WhitCounter;
