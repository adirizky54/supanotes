import { t } from "../utils";
import exampleRouter from "./example";
import authRouter from "./auth";

export const appRouter = t.mergeRouters(
  exampleRouter,
  authRouter,
);

export type IAppRouter = typeof appRouter;
