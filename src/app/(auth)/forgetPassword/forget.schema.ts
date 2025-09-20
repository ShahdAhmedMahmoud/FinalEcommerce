import * as zod from "zod";

export const schema = zod.object({
  email: zod.string().email("Invalid email"),
});
