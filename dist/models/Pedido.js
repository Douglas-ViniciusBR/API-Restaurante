"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoSchema = void 0;
const zod_1 = require("zod");
exports.pedidoSchema = zod_1.z.object({
    cliente: zod_1.z
        .string()
        .min(1, "Nome do cliente é obrigatório")
        .max(100, "Nome do cliente muito longo"),
    quantidade: zod_1.z
        .number()
        .int("A quantidade deve ser um número inteiro")
        .positive("Quantidade deve ser positiva"),
    pratoId: zod_1.z
        .number()
        .int("ID do prato deve ser um número inteiro"),
});
//# sourceMappingURL=Pedido.js.map