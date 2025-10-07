import { CategoriaInput } from "../models/Categoria";
export declare function getAllCategorias(): Promise<({
    pratos: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
        preco: number;
        categoriaId: number;
    }[];
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
})[]>;
export declare function getCategoriaById(id: number): Promise<({
    pratos: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
        preco: number;
        categoriaId: number;
    }[];
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
}) | null>;
export declare function createCategoria(data: CategoriaInput): Promise<{
    pratos: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
        preco: number;
        categoriaId: number;
    }[];
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
}>;
export declare function updateCategoria(id: number, data: Partial<CategoriaInput>): Promise<{
    pratos: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
        preco: number;
        categoriaId: number;
    }[];
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
}>;
export declare function deleteCategoria(id: number): Promise<{
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
}>;
//# sourceMappingURL=categoriaService.d.ts.map