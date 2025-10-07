import { z } from "zod";
export declare const pedidoSchema: z.ZodObject<{
    cliente: z.ZodString;
    quantidade: z.ZodNumber;
    pratoId: z.ZodNumber;
}, z.core.$strip>;
export type PedidoInput = z.infer<typeof pedidoSchema>;
//# sourceMappingURL=Pedido.d.ts.map