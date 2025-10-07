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
const express_1 = require("express");
const controller = __importStar(require("../controllers/pratoController"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Pratos
 *   description: Endpoints para gerenciar os pratos do restaurante
 */
/**
 * @swagger
 * /api/pratos:
 *   get:
 *     summary: Retorna todos os pratos
 *     tags: [Pratos]
 *     responses:
 *       200:
 *         description: Lista de pratos
 */
router.get("/", controller.getAll);
/**
 * @swagger
 * /api/pratos/{id}:
 *   get:
 *     summary: Retorna um prato específico
 *     tags: [Pratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prato encontrado
 *       404:
 *         description: Prato não encontrado
 */
router.get("/:id", controller.getOne);
/**
 * @swagger
 * /api/pratos:
 *   post:
 *     summary: Cria um novo prato
 *     tags: [Pratos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               categoriaId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Prato criado com sucesso
 */
router.post("/", controller.create);
/**
 * @swagger
 * /api/pratos/{id}:
 *   put:
 *     summary: Atualiza um prato existente
 *     tags: [Pratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prato atualizado com sucesso
 *       404:
 *         description: Prato não encontrado
 */
router.put("/:id", controller.update);
/**
 * @swagger
 * /api/pratos/{id}:
 *   delete:
 *     summary: Remove um prato existente
 *     tags: [Pratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Prato removido com sucesso
 *       404:
 *         description: Prato não encontrado
 */
router.delete("/:id", controller.remove);
exports.default = router;
//# sourceMappingURL=pratoRoutes.js.map