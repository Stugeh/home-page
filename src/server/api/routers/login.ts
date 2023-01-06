import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

export const loginRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ password: z.string() }))
    .query(({ input }) => 
        env.ADMIN_PW === input.password
        ? "logged in"
        : "nope"
    ),
});