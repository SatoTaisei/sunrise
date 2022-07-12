import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "sunrise3012",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});
