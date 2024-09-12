"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = (values: z.infer<typeof LoginSchema>) => {
  console.log(values);

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Os campos podem estar errados ou inválidos" };
  }
  return { success: "E-mail enviado, aceita lá!" };
};
