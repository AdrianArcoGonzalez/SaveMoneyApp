import { rest } from "msw";
import environments from "./environments/environments";

export const handlers = [
  rest.post(environments.login, async (req, res, ctx) => {
    const body = await req.json();
    if (body.username === "wrong") {
      return res(ctx.status(403));
    }
  }),
];
