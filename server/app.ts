import type {Config, Context} from "@netlify/functions";
import {createRequestHandler} from "react-router";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_NETLIFY: string;
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default async (request: Request, context: Context) => {
  return requestHandler(request, {
    VALUE_FROM_NETLIFY: "Hello from Netlify",
    MAPBOX_TOKEN: 'pk.eyJ1IjoibmV0bGlmeSIsImEiOiJjbG5vZ3V2dW4wZzQxM2RudW9jZ3B6cXlqIn0.8g7rYk1a4h8e7f5nqk6x9A',
  });
};

export const config: Config = {
  path: "/*",
  preferStatic: true,
};
