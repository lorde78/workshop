// src/validation/userSchema.ts
import { object, string } from "valibot";

export const userSchema = object({
	username: string(), // Use the basic string validator
	email: string(), // Use the basic string validator
	password: string(), // Use the basic string validator
});

export default userSchema;
