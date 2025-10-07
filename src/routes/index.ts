import { Router } from "express";
import categoriaRoutes from "./categoriaRoutes";
import pratoRoutes from "./pratoRoutes";
import pedidoRoutes from "./pedidoRoutes";

const router = Router();

router.use("/categorias", categoriaRoutes);
router.use("/pratos", pratoRoutes);
router.use("/pedidos", pedidoRoutes);

export default router;
