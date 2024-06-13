import * as v from "valibot";

export const PasswordSchema = v.string();

export type PasswordType = v.InferOutput<typeof PasswordSchema>;
