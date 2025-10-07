"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.update = update;
exports.remove = remove;
const Pedido_1 = require("../models/Pedido");
const service = __importStar(require("../services/pedidoService"));
async function getAll(req, res) {
    try {
        const pedidos = await service.getAllPedidos();
        res.json({ data: pedidos });
    }
    catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
}
async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id ?? "", 10);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inválido" });
        const pedido = await service.getPedidoById(id);
        if (!pedido)
            return res.status(404).json({ error: "Pedido não encontrado" });
        res.json({ data: pedido });
    }
    catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ error: "Erro ao buscar pedido" });
    }
}
async function create(req, res) {
    try {
        const parsed = Pedido_1.pedidoSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: "Dados inválidos", details: parsed.error.format() });
        const novo = await service.createPedido(parsed.data);
        res.status(201).json({ data: novo });
    }
    catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ error: "Erro ao criar pedido" });
    }
}
async function update(req, res) {
    try {
        const id = parseInt(req.params.id ?? "", 10);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inválido" });
        const parsed = Pedido_1.pedidoSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: "Dados inválidos", details: parsed.error.format() });
        const atualizado = await service.updatePedido(id, parsed.data);
        res.json({ data: atualizado });
    }
    catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ error: "Erro ao atualizar pedido" });
    }
}
async function remove(req, res) {
    try {
        const id = parseInt(req.params.id ?? "", 10);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inválido" });
        await service.deletePedido(id);
        res.status(204).send();
    }
    catch (error) {
        console.error("Erro:", error);
        res.status(500).json({ error: "Erro ao deletar pedido" });
    }
}
//# sourceMappingURL=pedidoController.js.map