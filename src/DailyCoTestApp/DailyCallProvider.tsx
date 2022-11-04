import DailyIframe, { DailyEventObject, DailyCall } from "@daily-co/daily-js";
import { DailyProvider } from "@daily-co/daily-react-hooks";

import React, { memo, useEffect, useState } from "react";

import { DailyCallContext } from "./DailyCallContext";

/**
 * Call Provider / Context
 * ---
 * Configures the general state of a Daily call, such as which features
 * to enable, as well as instantiate the 'call machine' hook responsible
 * for the overaching call loop (joining, leaving, etc)
 */
const DailyCallProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appState, setAppState] = useState<string>("STATE_IDLE");
  const [callObject, setCallObject] = useState<DailyCall>();

  // listen to loadAttemptFailed upon creating new CallObject
  function handleLoadAttemptFailed(event?: DailyEventObject) {
    console.log(`${event.action} - ${event.errorMsg}`);
  }

  /* 1. set dailyCoCallObject */
  useEffect(() => {
    const newCallObject = DailyIframe.createCallObject({
      dailyConfig: {
        experimentalChromeVideoMuteLightOff: true,

        userMediaAudioConstraints: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: false,
        },
        userMediaVideoConstraints: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },

        /*
           Daily's example: https://gist.github.com/kwindla/bf016dfa76275efc3323f84e8a45803e
           Docs on encoding settings: https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSendParameters/encodings
         */
      },
    });
    setCallObject(newCallObject);

    newCallObject.on("load-attempt-failed", handleLoadAttemptFailed);

    return () => {
      newCallObject.off("load-attempt-failed", handleLoadAttemptFailed);
      newCallObject.leave();
      newCallObject.destroy();
    };
  }, []);

  return (
    <DailyProvider callObject={callObject}>
      <DailyCallContext.Provider
        value={{
          appState,
          setAppState,
        }}
      >
        {children}
      </DailyCallContext.Provider>
    </DailyProvider>
  );
};

export const DailyCallProvider = memo(DailyCallProviderComponent);
