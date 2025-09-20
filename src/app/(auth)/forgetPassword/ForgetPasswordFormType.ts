import * as zod from "zod";
import { schema } from "./forget.schema";

export type ForgetPasswordFormType = zod.infer<typeof schema>;
