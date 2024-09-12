import * as z from "zod";

export const LoginSchema =z.object(
    {
        email:z.string().email({
            message:"Sem um e-mail não conseguimos encontrar sua conta"
        }),
        password: z.string().min(1,{
            message:"É preciso inserir a senha"
        }),
    }
)