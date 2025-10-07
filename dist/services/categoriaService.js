"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategorias = getAllCategorias;
exports.getCategoriaById = getCategoriaById;
exports.createCategoria = createCategoria;
exports.updateCategoria = updateCategoria;
exports.deleteCategoria = deleteCategoria;
const client_1 = require("../prisma/client");
async function getAllCategorias() {
    return client_1.prisma.categoria.findMany({
        include: { pratos: true },
        orderBy: { createdAt: "desc" },
    });
}
async function getCategoriaById(id) {
    return client_1.prisma.categoria.findUnique({
        where: { id },
        include: { pratos: true },
    });
}
async function createCategoria(data) {
    const payload = {
        nome: data.nome,
        descricao: data.descricao ?? null,
    };
    return client_1.prisma.categoria.create({
        data: payload,
        include: { pratos: true },
    });
}
async function updateCategoria(id, data) {
    const payload = {};
    if (data.nome !== undefined)
        payload.nome = data.nome;
    // allow setting descricao to null explicitly, otherwise leave unchanged
    if (data.descricao !== undefined)
        payload.descricao = data.descricao ?? null;
    return client_1.prisma.categoria.update({
        where: { id },
        data: payload,
        include: { pratos: true },
    });
}
async function deleteCategoria(id) {
    const categoria = await client_1.prisma.categoria.findUnique({
        where: { id },
        include: { pratos: true },
    });
    if (categoria && categoria.pratos.length > 0) {
        throw new Error("Não é possível deletar categoria com pratos vinculados");
    }
    return client_1.prisma.categoria.delete({ where: { id } });
}
//# sourceMappingURL=categoriaService.js.map