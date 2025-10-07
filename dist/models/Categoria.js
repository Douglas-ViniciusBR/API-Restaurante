"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaSchema = void 0;
const zod_1 = require("zod");
exports.categoriaSchema = zod_1.z.object({
    nome: zod_1.z
        .string()
        .min(1, "Nome é obrigatório")
        .max(100, "Nome muito longo"),
    descricao: zod_1.z
        .string()
        .optional(),
});
//# sourceMappingURL=Categoria.js.map