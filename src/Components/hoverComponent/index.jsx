import React, { useState } from "react";

const Hover = () => {
  const [Hover, setHover] = useState(0);
  return (
    <div>
      <div>{Hover} Times hover</div>
    </div>
  );
};

export default Hover;
