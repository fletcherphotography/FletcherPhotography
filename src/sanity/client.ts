import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

// Falls back to a placeholder project id so the SDK doesn't throw when Sanity
// hasn't been configured yet — queries.ts skips all fetches in that case anyway.
export const client = createClient({
  projectId: isSanityConfigured ? projectId : "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});
