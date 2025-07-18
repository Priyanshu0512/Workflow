import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/app/features/auth/server/route";
import workspaces from "@/app/features/workspaces/server/route";
import members from "@/app/features/members/server/route";

const app = new Hono().basePath("/api");

const routes = app
  .route("/auth", auth)
  .route("/workspaces", workspaces)
  .route("/members", members);

export const GET = handle(app);

export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export type AppType = typeof routes;
