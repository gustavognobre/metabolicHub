import * as z from "zod";

// Definindo os tipos de arquivos de imagem permitidos
const imageTypes = ["image/jpeg", "image/png", "image/gif"];

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "O nome é obrigatório.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido para criar sua conta.",
  }),
  dateBirth: z.string({
    required_error: "A data de nascimento é obrigatória.",
  }),
  gender: z.enum(["Masculino", "Feminino", "Outros"], {
    required_error: "Por favor, selecione seu gênero.",
  }),
  photo: z
    .any()
    .optional() // Foto é opcional
    .refine(
      (file) => !file || imageTypes.includes(file?.type), // Se o arquivo existir, validamos o tipo
      {
        message: "O arquivo deve ser uma imagem do tipo JPEG, PNG ou GIF.",
      }
    ),
  password: z
    .string()
    .min(8, {
      message: "A senha deve ter no mínimo 8 caracteres.",
    })
    .regex(/[A-Z]/, {
      message: "A senha deve conter pelo menos uma letra maiúscula.",
    })
    .regex(/[a-z]/, {
      message: "A senha deve conter pelo menos uma letra minúscula.",
    })
    .regex(/[0-9]/, {
      message: "A senha deve conter pelo menos um número.",
    })
    .regex(/[\W_]/, {
      message: "A senha deve conter pelo menos um caractere especial.",
    }),
  confirmPassword: z
    .string()
    .min(8, {
      message: "A confirmação da senha é obrigatória.",
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não correspondem.",
  path: ["confirmPassword"],
});
