import { useCallState } from "./DailyCallContext";
import { useDaily } from "@daily-co/daily-react-hooks";

const ROOM_URL = process.env.REACT_APP_ROOM_URL;
const API_KEY = process.env.REACT_APP_DAILY_API_KEY;

console.log({ ROOM_URL, API_KEY });
export const DailyCallJoiner = () => {
  const { setAppState, appState: dailyCoAppState } = useCallState();
  const dailyCoCallObject = useDaily();

  //Fetch token
  async function fetchMeetingToken() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          is_owner: true,
          user_id: "6f8108b9-634b-4ab8-ae5a-f86d576861ae",
          user_name: "test",
          room_name: "ok",
        },
      }),
    };

    const dailyRes = await fetch(
      "https://api.daily.co/v1/meeting-tokens",
      options
    );
    const { token } = await dailyRes.json();
    console.log("[INIT] Token fetched ", token);

    return token;
  }

  const isConnected = dailyCoAppState === "STATE_JOINED";

  const handleJoinRoom = async () => {
    setAppState?.("STATE_JOINING");
    const token = await fetchMeetingToken();

    if (token) {
      await dailyCoCallObject?.join({
        url: ROOM_URL,
        token,
        subscribeToTracksAutomatically: true,
        videoSource: false,
      });
      setAppState?.("STATE_JOINED");
    }
  };
  if (!dailyCoCallObject) {
    return <div>loading...</div>;
  }

  if (isConnected) {
    return <div>Joined room</div>;
  }
  return <button onClick={handleJoinRoom}>Join room</button>;
};
