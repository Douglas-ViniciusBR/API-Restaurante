import { PratoInput } from "../models/Prato";
export declare function getAllPratos(): Promise<({
    categoria: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
    };
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
    preco: number;
    categoriaId: number;
})[]>;
export declare function getPratoById(id: number): Promise<({
    categoria: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
    };
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
    preco: number;
    categoriaId: number;
}) | null>;
export declare function createPrato(data: PratoInput): Promise<{
    categoria: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
    };
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
    preco: number;
    categoriaId: number;
}>;
export declare function updatePrato(id: number, data: Partial<PratoInput>): Promise<{
    categoria: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
    };
} & {
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
    preco: number;
    categoriaId: number;
}>;
export declare function deletePrato(id: number): Promise<{
    nome: string;
    descricao: string | null;
    id: number;
    createdAt: Date;
    preco: number;
    categoriaId: number;
}>;
//# sourceMappingURL=pratoService.d.ts.map