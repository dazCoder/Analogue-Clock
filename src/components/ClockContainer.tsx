import Clock from "./Clock";
import { pixelToRem, timeZones } from "../tools/utils";
import { useState } from "react";

type propType = {
  disabled: boolean;
  timeZone: string;
};

const ClockContainer = ({ disabled, timeZone }: propType) => {
  const [timezone, setTimezone] = useState(timeZone);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: pixelToRem(60),
      }}
    >
      <Clock timeZone={timezone} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: pixelToRem(10),
        }}
      >
        <label>Select Time Zone</label>
        <select
          disabled={disabled}
          style={{
            backgroundColor: "#000",
            padding: pixelToRem(10),
            fontSize: pixelToRem(15),
            borderRadius: pixelToRem(5),
          }}
          value={timezone}
          onChange={(event) => {
            setTimezone(event.target.value);
          }}
        >
          {timeZones.map((timezoneItem) => (
            <option key={timezoneItem} value={timezoneItem}>
              {timezoneItem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ClockContainer;
