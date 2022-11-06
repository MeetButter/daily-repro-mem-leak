import "./App.css";
import { DailyCoTestApp } from "./DailyCoTestApp/DailyCoTestApp";

/**
 * This file does not have the memory leak
 */
function AppWithoutLeak() {
  return (
    <div className="App">
      <DailyCoTestApp />
    </div>
  );
}

export default AppWithoutLeak;
