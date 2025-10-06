import { prisma } from "../prisma/client";
import { CategoriaInput } from "../models/Categoria";

export async function getAllCategorias() {
  return prisma.categoria.findMany({
    include: { pratos: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getCategoriaById(id: number) {
  return prisma.categoria.findUnique({
    where: { id },
    include: { pratos: true },
  });
}

export async function createCategoria(data: CategoriaInput) {
  return prisma.categoria.create({ 
    data,
    include: { pratos: true },
  });
}

export async function updateCategoria(id: number, data: Partial<CategoriaInput>) {
  return prisma.categoria.update({ 
    where: { id }, 
    data,
    include: { pratos: true },
  });
}

export async function deleteCategoria(id: number) {
  const categoria = await prisma.categoria.findUnique({
    where: { id },
    include: { pratos: true },
  });

  if (categoria && categoria.pratos.length > 0) {
    throw new Error("Não é possível deletar categoria com pratos vinculados");
  }

  return prisma.categoria.delete({ where: { id } });
}
