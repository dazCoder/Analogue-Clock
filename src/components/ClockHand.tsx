import React from "react";

type propType = {
  style: React.CSSProperties;
  transform: string;
};

const ClockHand = ({ style, transform }: propType) => {
  return (
    <div className="hand" style={{ transform }}>
      <i style={style}></i>
    </div>
  );
};

export default ClockHand;
