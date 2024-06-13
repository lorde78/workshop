import * as v from "valibot";

export const EmailSchema = v.string();

export type EmailType = v.InferOutput<typeof EmailSchema>;
