import { Router } from "express";
import * as controller from "../controllers/pratoController";

const router = Router();

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

export default router;
