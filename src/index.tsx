import App from "./App";
/**
 * if you want to see the memory leak, comment out the line below and uncomment the line above
 * if you want to see without the leak, comment out the line above and uncomment the line below
 */
// import App from "./AppWithoutLeak";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
