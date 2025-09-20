import * as zod from "zod";
import { schema } from "./reset.schema";

export type ResetFormType = zod.infer<typeof schema>;
