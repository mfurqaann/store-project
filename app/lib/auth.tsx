import { z } from "zod";

export const loginFormSchema = z.object({
    username: z
        .string()
        .min(1, { message: "Username field must not be empty" }),
    password: z
        .string()
        .min(1, { message: "Password field must not be empty" })
})