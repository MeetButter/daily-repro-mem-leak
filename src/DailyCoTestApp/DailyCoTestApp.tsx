import { DailyCallJoiner } from "./DailyCallJoiner";
import { DailyCallProvider } from "./DailyCallProvider";

export const DailyCoTestApp = () => {
  return (
    <DailyCallProvider>
      <DailyCallJoiner />
    </DailyCallProvider>
  );
};
