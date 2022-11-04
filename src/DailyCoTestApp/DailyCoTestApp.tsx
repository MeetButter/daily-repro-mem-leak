import { DailyCallJoiner } from "./DailyCallJoiner";
import { DailyCallProvider } from "./DailyCallProvider";
import { DummyComponent1 } from "./LeakMaker";

export const DailyCoTestApp = () => {
  return (
    <DailyCallProvider>
      <DailyCallJoiner />
      <DummyComponent1 />
    </DailyCallProvider>
  );
};
