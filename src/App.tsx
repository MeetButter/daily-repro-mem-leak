import "./App.css";
import { DailyCoTestApp } from "./DailyCoTestApp/DailyCoTestApp";
import { DummyComponent2 } from "./DailyCoTestApp/LeakMaker";

function App() {
  return (
    <div className="App">
      <DailyCoTestApp />
      <DummyComponent2 />
    </div>
  );
}

export default App;
