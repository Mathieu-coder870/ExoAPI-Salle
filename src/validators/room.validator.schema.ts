import { z } from "zod";

// const { z } = require('zod');

export const roomRegistrationSchema = z.object({
  label: z.string().min(3).max(30).regex(/^[a-zA-Z0-9]+$/),
  capacity: z.number().min(1).max(60),
  site: z.string().min(6).max(20).regex(/^[a-zA-Z0-9]+$/),
  building: z.string().min(3).max(30).regex(/^[a-zA-Z0-9]+$/),
  floor: z.number().min(1).max(3)
});
