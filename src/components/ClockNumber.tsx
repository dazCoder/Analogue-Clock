import React from "react";

type propType = {
  number: number;
};

const ClockNumber = ({ number }: propType) => {
  return (
    <span style={{ transform: `rotate(calc(30deg * ${number}))` }}>
      <b style={{ transform: `rotate(calc(-30deg * ${number}))` }}>{number}</b>
    </span>
  );
};

export default ClockNumber;
