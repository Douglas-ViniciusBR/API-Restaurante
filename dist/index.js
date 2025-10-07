"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("API Restaurante rodando");
});
app.use("/api", routes_1.default);
(0, swagger_1.setupSwagger)(app);
app.listen(port, () => {
    console.log(`API Restaurante rodando na porta ${port}`);
});
//# sourceMappingURL=index.js.map