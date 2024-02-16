import { z } from "zod";
import { config } from "dotenv";

const envSchema = z.object({
	DATABASE_URL: z.string().url(),
	PORT: z.coerce.number(),
});

export const env = envSchema.parse(config().parsed);
