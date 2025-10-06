import { z } from "zod";

export const pratoSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome muito longo"),
  preco: z
    .number()
    .positive("Preço deve ser positivo"),
  descricao: z
    .string()
    .optional(),
  categoriaId: z
    .number()
    .int("ID da categoria deve ser um número inteiro")
    .positive("ID da categoria deve ser positivo"),
});

export type PratoInput = z.infer<typeof pratoSchema>;
