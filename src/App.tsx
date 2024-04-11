import ClockContainer from "./components/ClockContainer";
import { pixelToRem } from "./tools/utils";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: pixelToRem(30),
      }}
    >
      <ClockContainer timeZone="Europe/London" disabled={true} />
      <ClockContainer timeZone="America/New_York" disabled={false} />
      <ClockContainer timeZone="Asia/Kolkata" disabled={false} />
    </div>
  );
}

export default App;
