/**
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - cliente
 *         - quantidade
 *         - pratoId
 *       properties:
 *         id:
 *           type: integer
 *         cliente:
 *           type: string
 *         quantidade:
 *           type: integer
 *         pratoId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 * /pedidos:
 *   get:
 *     summary: Listar todos os pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *
 *   post:
 *     summary: Criar um novo pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: Pedido criado
 *
 * /pedidos/{id}:
 *   get:
 *     summary: Obter um pedido pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *
 *   put:
 *     summary: Atualizar um pedido pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido atualizado
 *
 *   delete:
 *     summary: Deletar um pedido pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: Pedido deletado
 */
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=pedidoRoutes.d.ts.map