import express, { Express } from "express";
import cors from "cors";
import router from "./routes";
import { setupSwagger } from "./config/swagger";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("API Restaurante rodando");
});

// Usa o roteador principal
app.use("/api", router);

// Configura Swagger
setupSwagger(app);

app.listen(port, () => {
  console.log(`API Restaurante rodando na porta ${port}`);
});

