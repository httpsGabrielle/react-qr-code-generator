import { z } from "zod";

export const qrcodeSchema = z.object({
  text: z
    .string()
    .min(1, "Campo obrigatório")
    .max(1000, "Máximo de 1000 caracteres"),

  size: z
    .number()
    .min(100, "Tamanho mínimo 100px")
    .max(1000, "Tamanho máximo 1000px"),

  foreground: z.string().regex(/^#([A-Fa-f0-9]{6})$/, "Cor inválida"),

  background: z.string().regex(/^#([A-Fa-f0-9]{6})$/, "Cor inválida"),

  logo: z.any().optional(),

  margin: z.number().min(0).max(20),
});
