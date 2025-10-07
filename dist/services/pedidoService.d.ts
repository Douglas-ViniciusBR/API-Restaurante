import { PedidoInput } from "../models/Pedido.js";
export declare function getAllPedidos(): Promise<({
    prato: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
        preco: number;
        categoriaId: number;
    };
} & {
    id: number;
    createdAt: Date;
    cliente: string;
    quantidade: number;
    pratoId: number;
})[]>;
export declare function getPedidoById(id: number): Promise<({
    prato: {
        nome: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
        preco: number;
        categoriaId: number;
    };
} & {
    id: number;
    createdAt: Date;
    cliente: string;
    quantidade: number;
    pratoId: number;
}) | null>;
export declare function createPedido(data: PedidoInput): Promise<{
    id: number;
    createdAt: Date;
    cliente: string;
    quantidade: number;
    pratoId: number;
}>;
export declare function updatePedido(id: number, data: PedidoInput): Promise<{
    id: number;
    createdAt: Date;
    cliente: string;
    quantidade: number;
    pratoId: number;
}>;
export declare function deletePedido(id: number): Promise<{
    id: number;
    createdAt: Date;
    cliente: string;
    quantidade: number;
    pratoId: number;
}>;
//# sourceMappingURL=pedidoService.d.ts.map