import React, { useState } from "react";

const WhitCounter = (WrapperComponents, componentValue) => {
  const UpdateComponent = (props) => {
    const [Counter, setCounter] = useState(0);
    const incrementCount = () => {
      setCounter(Counter + componentValue);
    };
    return (
      <WrapperComponents
        Counter={Counter}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return UpdateComponent;
};

export default WhitCounter;
