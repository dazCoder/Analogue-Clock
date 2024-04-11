import "../styleSheet/clock.css";
import ClockNumber from "./ClockNumber";
import ClockHand from "./ClockHand";
import { alertEveryHour, clockHandList, clockNumberList } from "../tools/utils";
import { useEffect, useRef, useState } from "react";
import { clockHand } from "../tools/enum";

type propType = {
  timeZone: string;
};

const Clock = ({ timeZone }: propType) => {
  const timerRef = useRef<NodeJS.Timer>();
  const [hourHandRotation, setHourHandRotation] = useState(0);
  const [minuteHandRotation, setMinuteHandRotation] = useState(0);
  const [secondHandRotation, setSecondHandRotation] = useState(0);

  useEffect(() => {
    clearInterval(timerRef.current);
    const displayTime = () => {
      const date = new Date();
      const time = new Intl.DateTimeFormat("en-Us", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone,
      }).format(date);
      const currentTime = time.split(":").map(Number);
      alertEveryHour(currentTime, timeZone);

      const [currentHour, currentMinute, currentSecond] = currentTime;
      setHourHandRotation(30 * currentHour + currentMinute / 2);
      setMinuteHandRotation(6 * currentMinute);
      setSecondHandRotation(6 * currentSecond);
    };
    timerRef.current = setInterval(displayTime, 1000);
    return () => clearInterval(timerRef.current);
  }, [timeZone]);

  return (
    <div className="container">
      <div className="clock">
        {clockHandList.map((hand) => {
          let handRotation = 0;
          switch (hand.name) {
            case clockHand.HOUR:
              handRotation = hourHandRotation;
              break;
            case clockHand.MINUTE:
              handRotation = minuteHandRotation;
              break;
            case clockHand.SECOND:
              handRotation = secondHandRotation;
              break;
            default:
              break;
          }

          return (
            <ClockHand
              key={hand.name}
              style={{
                backgroundColor: hand.backgroundColor,
                height: hand.height,
              }}
              transform={`rotate(${handRotation}deg)`}
            />
          );
        })}

        {clockNumberList.map((number) => (
          <ClockNumber key={number} number={number} />
        ))}
      </div>
    </div>
  );
};

export default Clock;
