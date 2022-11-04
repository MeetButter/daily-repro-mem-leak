import { createContext, useContext } from "react";

const initState = {
  appState: "STATE_IDLE",
  setAppState: undefined,
};

interface ICallState {
  appState: string;
  setAppState?: (appState: string) => void;
}

export const DailyCallContext = createContext<ICallState>(initState);
export const useCallState = () => useContext<ICallState>(DailyCallContext);
