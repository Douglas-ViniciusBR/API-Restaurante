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
const Prato_1 = require("../models/Prato");
const service = __importStar(require("../services/pratoService"));
async function getAll(req, res) {
    try {
        const pratos = await service.getAllPratos();
        res.json({ data: pratos });
    }
    catch (error) {
        res.status(500).json({ error: "Erro" });
    }
}
async function getOne(req, res) {
    try {
        const id = parseInt(String(req.params.id), 10);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inv�lido" });
        const prato = await service.getPratoById(id);
        if (!prato)
            return res.status(404).json({ error: "N�o encontrado" });
        res.json({ data: prato });
    }
    catch (error) {
        res.status(500).json({ error: "Erro" });
    }
}
async function create(req, res) {
    try {
        const parsed = Prato_1.pratoSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: "Dados inv�lidos" });
        const novo = await service.createPrato(parsed.data);
        res.status(201).json({ data: novo });
    }
    catch (error) {
        if (error.message === "Categoria n�o existe")
            return res.status(400).json({ error: error.message });
        res.status(500).json({ error: "Erro" });
    }
}
async function update(req, res) {
    try {
        const id = parseInt(String(req.params.id), 10);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inv�lido" });
        const parsed = Prato_1.pratoSchema.partial().safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: "Dados inválidos" });
        const atual = await service.updatePrato(id, parsed.data);
        res.json({ data: atual });
    }
    catch (error) {
        if (error.message === "Categoria n�o existe")
            return res.status(400).json({ error: error.message });
        res.status(500).json({ error: "Erro" });
    }
}
async function remove(req, res) {
    try {
        const id = parseInt(String(req.params.id), 10);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inválido" });
        await service.deletePrato(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Erro" });
    }
}
//# sourceMappingURL=pratoController.js.map