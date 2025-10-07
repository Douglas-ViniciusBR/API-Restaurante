"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPratos = getAllPratos;
exports.getPratoById = getPratoById;
exports.createPrato = createPrato;
exports.updatePrato = updatePrato;
exports.deletePrato = deletePrato;
const client_1 = require("../prisma/client");
async function getAllPratos() {
    return client_1.prisma.prato.findMany({
        include: { categoria: true },
        orderBy: { createdAt: "desc" },
    });
}
async function getPratoById(id) {
    return client_1.prisma.prato.findUnique({
        where: { id },
        include: { categoria: true },
    });
}
async function createPrato(data) {
    const categoria = await client_1.prisma.categoria.findUnique({
        where: { id: data.categoriaId }
    });
    if (!categoria) {
        throw new Error("Categoria não existe");
    }
    const payload = {
        nome: data.nome,
        preco: data.preco,
        descricao: data.descricao ?? null,
        categoria: { connect: { id: data.categoriaId } },
    };
    return client_1.prisma.prato.create({
        data: payload,
        include: { categoria: true },
    });
}
async function updatePrato(id, data) {
    if (data.categoriaId) {
        const categoria = await client_1.prisma.categoria.findUnique({
            where: { id: data.categoriaId }
        });
        if (!categoria) {
            throw new Error("Categoria não existe");
        }
    }
    const payload = {};
    if (data.nome !== undefined)
        payload.nome = data.nome;
    if (data.preco !== undefined)
        payload.preco = data.preco;
    if (data.descricao !== undefined)
        payload.descricao = data.descricao ?? null;
    if (data.categoriaId !== undefined)
        payload.categoria = { connect: { id: data.categoriaId } };
    return client_1.prisma.prato.update({
        where: { id },
        data: payload,
        include: { categoria: true },
    });
}
async function deletePrato(id) {
    return client_1.prisma.prato.delete({ where: { id } });
}
//# sourceMappingURL=pratoService.js.map