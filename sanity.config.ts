"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import templates from "./src/sanity/templates";

export default defineConfig({
  basePath: "/studio",
  name: "fletcher-photography",
  title: "Fletcher Photography — Studio",
  projectId,
  dataset,
  schema: { types: schemaTypes, templates: () => templates },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
