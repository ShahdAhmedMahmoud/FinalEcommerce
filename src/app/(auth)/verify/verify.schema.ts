import * as zod from "zod";

export const schema = zod.object({
  resetCode: zod.string().min(6, "Code must be at least 6 digits"),
});
