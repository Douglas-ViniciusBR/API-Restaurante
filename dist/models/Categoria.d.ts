import { z } from "zod";
export declare const categoriaSchema: z.ZodObject<{
    nome: z.ZodString;
    descricao: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CategoriaInput = z.infer<typeof categoriaSchema>;
//# sourceMappingURL=Categoria.d.ts.map