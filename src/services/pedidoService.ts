import { PrismaClient } from "@prisma/client";
import { PedidoInput } from "../models/Pedido";

const prisma = new PrismaClient();

export async function getAllPedidos() {
  return prisma.pedido.findMany({ include: { prato: true } });
}

export async function getPedidoById(id: number) {
  return prisma.pedido.findUnique({ where: { id }, include: { prato: true } });
}

export async function createPedido(data: PedidoInput) {
  return prisma.pedido.create({ data });
}

export async function updatePedido(id: number, data: PedidoInput) {
  return prisma.pedido.update({ where: { id }, data });
}

export async function deletePedido(id: number) {
  return prisma.pedido.delete({ where: { id } });
}
