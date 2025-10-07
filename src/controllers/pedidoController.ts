import type { Request, Response } from "express";
import { pedidoSchema } from "../models/Pedido";
import * as service from "../services/pedidoService";


export async function getAll(req: Request, res: Response) {
  try {
    const pedidos = await service.getAllPedidos();
    res.json({ data: pedidos });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar pedidos" });
  }
}

export async function getOne(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const pedido = await service.getPedidoById(id);
    if (!pedido) return res.status(404).json({ error: "Pedido não encontrado" });

    res.json({ data: pedido });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar pedido" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const parsed = pedidoSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: "Dados inválidos", details: parsed.error.format() });

    const novo = await service.createPedido(parsed.data);
    res.status(201).json({ data: novo });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao criar pedido" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const parsed = pedidoSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: "Dados inválidos", details: parsed.error.format() });

    const atualizado = await service.updatePedido(id, parsed.data);
    res.json({ data: atualizado });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao atualizar pedido" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    await service.deletePedido(id);
    res.status(204).send();
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao deletar pedido" });
  }
}
