import { Router } from "express";
import categoriaRoutes from "./categoriaRoutes";
import pratoRoutes from "./pratoRoutes";

const router = Router();

// Rotas principais da API
router.use("/categorias", categoriaRoutes);
router.use("/pratos", pratoRoutes);

export default router;
