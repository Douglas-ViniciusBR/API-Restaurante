"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPedidos = getAllPedidos;
exports.getPedidoById = getPedidoById;
exports.createPedido = createPedido;
exports.updatePedido = updatePedido;
exports.deletePedido = deletePedido;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getAllPedidos() {
    return prisma.pedido.findMany({ include: { prato: true } });
}
async function getPedidoById(id) {
    return prisma.pedido.findUnique({ where: { id }, include: { prato: true } });
}
async function createPedido(data) {
    return prisma.pedido.create({ data });
}
async function updatePedido(id, data) {
    return prisma.pedido.update({ where: { id }, data });
}
async function deletePedido(id) {
    return prisma.pedido.delete({ where: { id } });
}
//# sourceMappingURL=pedidoService.js.map