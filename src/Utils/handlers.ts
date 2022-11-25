import { rest } from "msw";
import environments from "./environments/environments";

export const handlers = [
  rest.post(environments.login, async (req, res, ctx) => {
    const body = await req.json();

    if (!body.userName || !body.password) {
      return res(ctx.status(403), ctx.json({ error: "Wrong data" }));
    }
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InZ2dnZ2IiwiaWQiOiI2MzBmMjkwOTJmMDU2MDMzMDFjOTY2ZjUiLCJpYXQiOjE2NjE5Mzk2MTl9.Zff5fV2EnVvFNBKZSNbmlE-fcZQbBoMhbq-q0KTjH7I",
        },
      })
    );
  }),
];
