import { z } from "zod";

export const categoriaSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome muito longo"),
  descricao: z
    .string()
    .optional(),
});

export type CategoriaInput = z.infer<typeof categoriaSchema>;
