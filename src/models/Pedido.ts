import { z } from "zod";

export const pedidoSchema = z.object({
  cliente: z
    .string()
    .min(1, "Nome do cliente é obrigatório")
    .max(100, "Nome do cliente muito longo"),
  quantidade: z
    .number()
    .int("A quantidade deve ser um número inteiro")
    .positive("Quantidade deve ser positiva"),
  pratoId: z
    .number()
    .int("ID do prato deve ser um número inteiro"),
});

export type PedidoInput = z.infer<typeof pedidoSchema>;
