"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pratoSchema = void 0;
const zod_1 = require("zod");
exports.pratoSchema = zod_1.z.object({
    nome: zod_1.z
        .string()
        .min(1, "Nome é obrigatório")
        .max(100, "Nome muito longo"),
    preco: zod_1.z
        .number()
        .positive("Preço deve ser positivo"),
    descricao: zod_1.z
        .string()
        .optional(),
    categoriaId: zod_1.z
        .number()
        .int("ID da categoria deve ser um número inteiro")
        .positive("ID da categoria deve ser positivo"),
});
//# sourceMappingURL=Prato.js.map