import * as zod from "zod";

export const schema = zod.object({
  email: zod.string().email("Invalid email"),
  newPassword: zod
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must include uppercase, lowercase, number, and special character"
    ),
});
