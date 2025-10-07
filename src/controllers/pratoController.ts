import { Request, Response } from "express";
import { pratoSchema } from "../models/Prato";
import * as service from "../services/pratoService";

export async function getAll(req: Request, res: Response) {
  try {
    const pratos = await service.getAllPratos();
    res.json({ data: pratos });
  } catch (error) {
    res.status(500).json({ error: "Erro" });
  }
}

export async function getOne(req: Request, res: Response) {
  try {
  const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inv�lido" });
    const prato = await service.getPratoById(id);
    if (!prato) return res.status(404).json({ error: "N�o encontrado" });
    res.json({ data: prato });
  } catch (error) {
    res.status(500).json({ error: "Erro" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const parsed = pratoSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Dados inv�lidos" });
    const novo = await service.createPrato(parsed.data);
    res.status(201).json({ data: novo });
  } catch (error: any) {
    if (error.message === "Categoria n�o existe") return res.status(400).json({ error: error.message });
    res.status(500).json({ error: "Erro" });
  }
}

export async function update(req: Request, res: Response) {
  try {
  const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inv�lido" });
    const parsed = pratoSchema.partial().safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Dados inválidos" });
  const atual = await service.updatePrato(id, parsed.data as any);
    res.json({ data: atual });
  } catch (error: any) {
    if (error.message === "Categoria n�o existe") return res.status(400).json({ error: error.message });
    res.status(500).json({ error: "Erro" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
    await service.deletePrato(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro" });
  }
}
