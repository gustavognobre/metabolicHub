"use server";

import * as z from "zod";
import bcrypt from  "bcrypt"
import multer from 'multer';

import { db } from "@/lib/db"
import {  RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Os campos podem estar errados ou inválidos" };
  }

  const {name, email, dateBirth, gender, photo, password} = validatedFields.data;
  // Converter a string da data de nascimento para um objeto Date
  const formattedDateBirth = new Date(dateBirth);
  const hashedPassword = await bcrypt.hash(password, 10);

  //CONFERIR A EXISTENCIA DESTE USUÁRIO NO BANCO
  const existingUser = await db.user.findUnique({
    where:{
      email
    }
  })
  if(existingUser){
    return{ error: "Este e-mail já tem uma conta ativa!"};
  }
  //APÓS CONFERIR CRIAR USUÁRIO
  await db.user.create({
    data:{
      name,
      email,
      dateBirth: formattedDateBirth, // Usar a data convertida
      gender,
      photo,
      password: hashedPassword
    }
  })
  //TODO: Fazer verificaçao de e-mail

  return { success: "Usuário Criado!" };
};