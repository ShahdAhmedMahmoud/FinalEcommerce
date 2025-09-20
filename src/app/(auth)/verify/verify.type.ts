import * as zod from "zod";
import { schema } from "./verify.schema";

export type VerifyFormType = zod.infer<typeof schema>;
