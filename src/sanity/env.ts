export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// True once a real Sanity project has been connected (env vars set).
// Everything that reads from Sanity falls back to local/static content when this is false,
// so the site keeps working before the CMS is wired up.
export const isSanityConfigured = Boolean(projectId);
