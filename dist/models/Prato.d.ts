import { z } from "zod";
export declare const pratoSchema: z.ZodObject<{
    nome: z.ZodString;
    preco: z.ZodNumber;
    descricao: z.ZodOptional<z.ZodString>;
    categoriaId: z.ZodNumber;
}, z.core.$strip>;
export type PratoInput = z.infer<typeof pratoSchema>;
//# sourceMappingURL=Prato.d.ts.map