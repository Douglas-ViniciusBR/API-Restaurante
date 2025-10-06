import { Request, Response } from "express";
import { categoriaSchema } from "../models/Categoria";
import * as service from "../services/categoriaService";

export async function getAll(req: Request, res: Response) {
  try {
    const categorias = await service.getAllCategorias();
    res.json({ data: categorias });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar categorias" });
  }
}

export async function getOne(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
    const categoria = await service.getCategoriaById(id);
    if (!categoria) return res.status(404).json({ error: "Não encontrada" });
    res.json({ data: categoria });
  } catch (error) {
    res.status(500).json({ error: "Erro" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const parsed = categoriaSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Dados inválidos", details: parsed.error.format() });
    const nova = await service.createCategoria(parsed.data);
    res.status(201).json({ data: nova });
  } catch (error: any) {
    if (error.code === "P2002") return res.status(409).json({ error: "Nome duplicado" });
    res.status(500).json({ error: "Erro" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
    const parsed = categoriaSchema.partial().safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Dados inválidos" });
    const atualizada = await service.updateCategoria(id, parsed.data);
    res.json({ data: atualizada });
  } catch (error: any) {
    if (error.code === "P2025") return res.status(404).json({ error: "Não encontrada" });
    res.status(500).json({ error: "Erro" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
    await service.deleteCategoria(id);
    res.status(204).send();
  } catch (error: any) {
    if (error.message.includes("pratos vinculados")) return res.status(400).json({ error: error.message });
    res.status(500).json({ error: "Erro" });
  }
}
