"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaRoutes_1 = __importDefault(require("./categoriaRoutes"));
const pratoRoutes_1 = __importDefault(require("./pratoRoutes"));
const pedidoRoutes_1 = __importDefault(require("./pedidoRoutes"));
const router = (0, express_1.Router)();
router.use("/categorias", categoriaRoutes_1.default);
router.use("/pratos", pratoRoutes_1.default);
router.use("/pedidos", pedidoRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map