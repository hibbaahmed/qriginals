import Stripe from "stripe";

import { env } from "../env.mjs";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2024-06-20",
  // Register this as an official Stripe plugin.
  // https://stripe.com/docs/building-plugins#setappinfo
  appInfo: {
    name: "Qriginals",
    version: "0.1.0",
  },
});
