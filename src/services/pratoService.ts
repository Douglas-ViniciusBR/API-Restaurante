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
  
  return prisma.prato.create({ 
    data,
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
  
  return prisma.prato.update({ 
    where: { id }, 
    data,
    include: { categoria: true },
  });
}

export async function deletePrato(id: number) {
  return prisma.prato.delete({ where: { id } });
}
