  import * as zod from 'zod'; 
import { schema } from './register.schema';

     
export type ResiterFormType =zod.infer<typeof schema>;