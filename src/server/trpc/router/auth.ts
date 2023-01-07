import { z } from "zod";
import { supabase } from "~/utils/supabase";

import { procedure, router } from "../utils";

export default router({
  login: procedure
    .input(z.object({
      email: z.string().email(),
      password: z.string(),
    }))
    .mutation(async ({ input }) => {
      const { data } = await supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      });

      return data;
    }),
});
