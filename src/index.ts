import express, { Express } from "express";
import cors from "cors";
import { setupSwagger } from "./config/swagger";
import router from "./routes";


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

setupSwagger(app);

app.get("/", (req, res) => {
  res.send("API Restaurante rodando ");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
