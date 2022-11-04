import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK ?? "");
export const useLeak = () => {
  console.log("stripePromise", stripePromise);
  return null;
};
