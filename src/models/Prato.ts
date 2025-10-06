import { z } from "zod";

export const pratoSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome � obrigat�rio")
    .max(100, "Nome muito longo"),
  preco: z
    .number()
    .positive("Pre�o deve ser positivo"),
  descricao: z
    .string()
    .optional(),
  categoriaId: z
    .number()
    .int("ID da categoria deve ser um n�mero inteiro")
    .positive("ID da categoria deve ser positivo"),
});

export type PratoInput = z.infer<typeof pratoSchema>;
