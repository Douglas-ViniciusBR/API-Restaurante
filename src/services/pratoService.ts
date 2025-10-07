import { prisma } from "../prisma/client";
import { PratoInput } from "../models/Prato";

export async function getAllPratos() {
  return prisma.prato.findMany({
    include: { categoria: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getPratoById(id: number) {
  return prisma.prato.findUnique({
    where: { id },
    include: { categoria: true },
  });
}

export async function createPrato(data: PratoInput) {
  const categoria = await prisma.categoria.findUnique({ 
    where: { id: data.categoriaId } 
  });
  
  if (!categoria) {
    throw new Error("Categoria não existe");
  }
  const payload: any = {
    nome: data.nome,
    preco: data.preco,
    descricao: data.descricao ?? null,
    categoria: { connect: { id: data.categoriaId } },
  };

  return prisma.prato.create({
    data: payload,
    include: { categoria: true },
  });
}

export async function updatePrato(id: number, data: Partial<PratoInput>) {
  if (data.categoriaId) {
    const categoria = await prisma.categoria.findUnique({ 
      where: { id: data.categoriaId } 
    });
    
    if (!categoria) {
      throw new Error("Categoria não existe");
    }
  }
  const payload: any = {};
  if (data.nome !== undefined) payload.nome = data.nome;
  if (data.preco !== undefined) payload.preco = data.preco;
  if (data.descricao !== undefined) payload.descricao = data.descricao ?? null;
  if (data.categoriaId !== undefined) payload.categoria = { connect: { id: data.categoriaId } };

  return prisma.prato.update({
    where: { id },
    data: payload,
    include: { categoria: true },
  });
}

export async function deletePrato(id: number) {
  return prisma.prato.delete({ where: { id } });
}
