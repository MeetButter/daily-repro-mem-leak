import "./App.css";
import { DailyCoTestApp } from "./DailyCoTestApp/DailyCoTestApp";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

/**
 * following Stripe's documentation
 * @ref https://stripe.com/docs/stripe-js/react
 */
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK ?? "");
function AppWithLeak() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App"></div>
    </Elements>
  );
}

export default AppWithLeak;
