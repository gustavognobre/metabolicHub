"use server";

import * as z from "zod";
import {  RegisterSchema } from "@/schemas";

export const register = (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Os campos podem estar errados ou inválidos" };
  }
  return { success: "E-mail enviado, aceita lá!" };
};
